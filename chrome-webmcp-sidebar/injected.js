(() => {
  const PAGE_SOURCE = "WEBMCP_PAGE";
  const EXT_SOURCE = "WEBMCP_EXTENSION";
  const CAPTURE_KEY = "__WEBMCP_CAPTURED_TOOLS__";
  const EXECUTOR_KEY = "__WEBMCP_CAPTURED_EXECUTORS__";

  function isObject(value) {
    return value !== null && typeof value === "object";
  }

  function ensureCaptureStore() {
    if (!isObject(window[CAPTURE_KEY])) {
      window[CAPTURE_KEY] = {
        tools: {},
        updatedAt: Date.now()
      };
    }
    return window[CAPTURE_KEY];
  }

  function ensureExecutorStore() {
    if (!isObject(window[EXECUTOR_KEY])) {
      window[EXECUTOR_KEY] = {};
    }
    return window[EXECUTOR_KEY];
  }

  function normalizeToolLike(item) {
    if (!item) return null;
    const name = item.name || item.id || item.toolName || item.tool_name;
    if (!name) return null;
    return {
      name,
      description: item.description || item.toolDescription || item.tool_description || "",
      input_schema:
        item.inputSchema ||
        item.input_schema ||
        item.inputschema ||
        item.toolInputSchema ||
        item.tool_input_schema ||
        item.parameters ||
        { type: "object", properties: {} }
    };
  }

  function captureTool(item) {
    const tool = normalizeToolLike(item);
    if (!tool) return false;
    const store = ensureCaptureStore();
    store.tools[tool.name] = tool;
    store.updatedAt = Date.now();
    return true;
  }

  function captureExecutor(name, executeFn) {
    if (!name || typeof executeFn !== "function") return;
    const store = ensureExecutorStore();
    store[name] = executeFn;
  }

  function captureFromContainer(container) {
    if (!container) return 0;
    let count = 0;
    if (Array.isArray(container)) {
      for (const item of container) if (captureTool(item)) count += 1;
      return count;
    }
    if (container instanceof Map) {
      for (const [k, v] of container.entries()) {
        if (captureTool({ ...(isObject(v) ? v : {}), name: isObject(v) ? v.name || k : k })) count += 1;
      }
      return count;
    }
    if (isObject(container)) {
      for (const [k, v] of Object.entries(container)) {
        if (!isObject(v)) continue;
        if (captureTool({ ...v, name: v.name || k })) count += 1;
      }
    }
    return count;
  }

  function patchModelContext() {
    const mc = navigator.modelContext;
    if (!mc || mc.__webmcpPatchedBySidebarAgent) return;

    try {
      mc.__webmcpPatchedBySidebarAgent = true;
    } catch {
      return;
    }

    const originalRegisterTool = mc.registerTool;
    if (typeof originalRegisterTool === "function") {
      mc.registerTool = function patchedRegisterTool(...args) {
        try {
          if (isObject(args[0])) {
            captureTool(args[0]);
            captureExecutor(args[0].name || args[0].id || args[0].toolName, args[0].execute);
          } else if (typeof args[0] === "string") {
            const maybeMeta = isObject(args[1]) ? args[1] : isObject(args[2]) ? args[2] : {};
            captureTool({ name: args[0], ...maybeMeta });
            const executeFn =
              (isObject(args[1]) && typeof args[1].execute === "function" && args[1].execute) ||
              (isObject(args[2]) && typeof args[2].execute === "function" && args[2].execute) ||
              (typeof args[2] === "function" && args[2]) ||
              (typeof args[3] === "function" && args[3]) ||
              null;
            captureExecutor(args[0], executeFn);
          }
        } catch {}
        return originalRegisterTool.apply(this, args);
      };
    }

    const originalUnregisterTool = mc.unregisterTool;
    if (typeof originalUnregisterTool === "function") {
      mc.unregisterTool = function patchedUnregisterTool(...args) {
        try {
          const name = typeof args[0] === "string" ? args[0] : isObject(args[0]) ? args[0].name : "";
          if (name && isObject(window[CAPTURE_KEY]?.tools)) {
            delete window[CAPTURE_KEY].tools[name];
            window[CAPTURE_KEY].updatedAt = Date.now();
          }
          if (name && isObject(window[EXECUTOR_KEY])) {
            delete window[EXECUTOR_KEY][name];
          }
        } catch {}
        return originalUnregisterTool.apply(this, args);
      };
    }

    const originalProvideContext = mc.provideContext;
    if (typeof originalProvideContext === "function") {
      mc.provideContext = function patchedProvideContext(...args) {
        try {
          const ctx = args[0];
          if (isObject(ctx)) {
            captureFromContainer(ctx.tools);
            captureFromContainer(ctx.functions);
          }
        } catch {}
        return originalProvideContext.apply(this, args);
      };
    }

    try {
      captureFromContainer(mc.tools);
      captureFromContainer(mc.functions);
      captureFromContainer(mc._tools);
      captureFromContainer(mc.toolRegistry);
      captureFromContainer(mc.registry);
    } catch {}
  }

  function getCandidates() {
    return [
      window.webmcp,
      window.WebMCP,
      window.__webmcp__,
      window.__WEBMCP__,
      window.mcp,
      window.__WEBMCP_CAPTURED_TOOLS__
    ].filter(Boolean);
  }

  function normalizeFunctions(candidates) {
    const map = new Map();

    for (const c of candidates) {
      if (!isObject(c)) continue;

      const pools = [c.functions, c.tools];
      for (const pool of pools) {
        if (!pool) continue;

        if (Array.isArray(pool)) {
          for (const item of pool) {
            if (!item) continue;
            const name = item.name || item.id;
            if (!name) continue;
            map.set(name, {
              name,
              description: item.description || "",
              input_schema: item.input_schema || item.parameters || { type: "object", properties: {} }
            });
          }
        } else if (isObject(pool)) {
          for (const [name, value] of Object.entries(pool)) {
            if (!name) continue;
            const description = isObject(value) ? value.description || "" : "";
            const inputSchema = isObject(value)
              ? value.input_schema || value.parameters || { type: "object", properties: {} }
              : { type: "object", properties: {} };
            map.set(name, { name, description, input_schema: inputSchema });
          }
        }
      }
    }

    return Array.from(map.values());
  }

  async function execute(name, args) {
    const candidates = getCandidates();

    for (const c of candidates) {
      try {
        if (typeof c.call === "function") {
          return await c.call(name, args);
        }
        if (typeof c.invoke === "function") {
          return await c.invoke(name, args);
        }

        const pools = [c.functions, c.tools];
        for (const pool of pools) {
          if (!pool) continue;

          const fn = Array.isArray(pool)
            ? pool.find((item) => item && (item.name === name || item.id === name))
            : pool[name];

          if (!fn) continue;

          if (typeof fn === "function") return await fn(args);
          if (typeof fn.run === "function") return await fn.run(args);
          if (typeof fn.invoke === "function") return await fn.invoke(args);
          if (typeof fn.call === "function") return await fn.call(args);
        }
      } catch (err) {
        throw err;
      }
    }

    throw new Error(`Function not found or not executable: ${name}`);
  }

  function pushFunctions() {
    const functions = normalizeFunctions(getCandidates());
    window.postMessage(
      {
        source: PAGE_SOURCE,
        type: "WEBMCP_FUNCTIONS_UPDATE",
        functions
      },
      "*"
    );
  }

  window.addEventListener("message", async (event) => {
    if (event.source !== window || !event.data || event.data.source !== EXT_SOURCE) return;
    const msg = event.data;
    if (msg.type !== "WEBMCP_EXECUTE_REQUEST") return;

    try {
      const result = await execute(msg.name, msg.args || {});
      window.postMessage(
        {
          source: PAGE_SOURCE,
          type: "WEBMCP_EXECUTE_RESULT",
          id: msg.id,
          ok: true,
          result
        },
        "*"
      );
    } catch (err) {
      window.postMessage(
        {
          source: PAGE_SOURCE,
          type: "WEBMCP_EXECUTE_RESULT",
          id: msg.id,
          ok: false,
          error: String(err?.message || err)
        },
        "*"
      );
    }
  });

  patchModelContext();
  pushFunctions();
  setInterval(patchModelContext, 1000);
  setInterval(pushFunctions, 2000);
})();
