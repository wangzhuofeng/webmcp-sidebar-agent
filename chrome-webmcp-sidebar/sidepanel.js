const BUILTIN_PROVIDERS = [
  {
    id: "siliconflow",
    nameZh: "硅基流动",
    nameEn: "SiliconFlow",
    baseUrl: "https://api.siliconflow.cn/v1"
  }
];

const I18N = {
  zh: {
    app_title: "WebMCP Sidebar Agent",
    config_title: "模型配置",
    provider_label: "服务商",
    provider_base_url_label: "当前服务商 Base URL",
    custom_provider_name_label: "自定义服务商名称",
    custom_provider_base_url_label: "OpenAI兼容 Base URL",
    add_provider: "添加服务商",
    provider_add_option: "+ 添加服务商",
    add_provider_ok: "服务商已添加",
    add_provider_need_name: "请填写服务商名称",
    add_provider_need_url: "请填写 Base URL",
    add_provider_bad_url: "Base URL 格式不正确（需以 http:// 或 https:// 开头）",
    add_provider_exists: "服务商名称已存在",
    provider_missing_base_url: "服务商 Base URL 未配置",
    provider_promo_link: "点击这里",
    provider_promo_text: "免费注册，获赠送算力",
    api_key_label: "API Key",
    model_label: "模型",
    save: "保存",
    test_api: "测试 API",
    load_models: "拉取模型",
    debug_title: "功能列表",
    refresh_functions: "刷新 Functions",
    chat_title: "对话",
    send: "发送",
    clear: "清空",
    prompt_placeholder: "例如：帮我在这个页面里查找标题并点击登录按钮",
    no_functions: "未发现 WebMCP functions",
    no_desc: "(无描述)",
    no_models: "未拉取到模型",
    provider_name: "硅基流动",
    status_saved: "已保存配置",
    status_api_ok: "API 连通正常",
    status_models_updated: "模型列表已更新",
    status_found_functions: (n) => `已发现 ${n} 个 WebMCP functions`,
    status_running: "执行中...",
    status_done: "完成",
    status_done_tokens: (total, prompt, completion) => `完成 (${total} tokens, P:${prompt}, C:${completion})`,
    status_chat_cleared: "已清空对话",
    status_boot_models_failed: "启动时拉取模型失败，可手动重试",
    status_init_probe_failed: "初始化探测失败",
    ask_api_key: "请先填写 API Key",
    ask_pick_model: "请先选择模型",
    empty_model_reply: "模型返回为空",
    empty_text_reply: "(无文本输出)",
    converge_fail: "达到最大工具调用轮次，任务未收敛",
    active_tab_not_found: "找不到当前激活标签页，请先点击一个普通网页标签页",
    no_exec_result: "无执行结果",
    tool_exec_failed: (name) => `执行 ${name} 失败`,
    api_error: (code, msg) => `API错误(${code}): ${msg}`,
    assistant_fail: (msg) => `失败: ${msg}`,
    sys_call_tool: (name, args) => `调用工具 ${name}(${JSON.stringify(args)})`,
    sys_tool_result: (name, result) => `工具结果 ${name}: ${result}`,
    system_prompt:
      "你是网页自动化助手。你必须优先使用提供的工具来操作网页并获取信息。执行完工具后给出简洁中文答复。",
    testing_unavailable: "testing-api: navigator.modelContextTesting 不可用",
    testing_callback_matched: (n, methods) => `testing-api: callback触发后 listTools() matched=${n} methods=[${methods}]`,
    testing_none: (methods, tries, summaries, errors) =>
      `testing-api: 未获取到工具 methods=[${methods}] tries=[${tries}] summaries=[${summaries}] errors=[${errors}]`,
    testing_exec_fail: (aliases, errors) => `testing api 执行失败: aliases=[${aliases}] ${errors}`,
    fallback_exec_fail: (testingErr, fallbackErr) => `${testingErr} || fallback执行失败: ${fallbackErr}`
  },
  en: {
    app_title: "WebMCP Sidebar Agent",
    config_title: "Model Config",
    provider_label: "Provider",
    provider_base_url_label: "Current Provider Base URL",
    custom_provider_name_label: "Custom Provider Name",
    custom_provider_base_url_label: "OpenAI-Compatible Base URL",
    add_provider: "Add Provider",
    provider_add_option: "+ Add Provider",
    add_provider_ok: "Provider added",
    add_provider_need_name: "Please enter provider name",
    add_provider_need_url: "Please enter Base URL",
    add_provider_bad_url: "Invalid Base URL (must start with http:// or https://)",
    add_provider_exists: "Provider name already exists",
    provider_missing_base_url: "Provider base URL is missing",
    provider_promo_link: "Click here",
    provider_promo_text: "to register for free and get bonus credits",
    api_key_label: "API Key",
    model_label: "Model",
    save: "Save",
    test_api: "Test API",
    load_models: "Load Models",
    debug_title: "Functions",
    refresh_functions: "Refresh Functions",
    chat_title: "Chat",
    send: "Send",
    clear: "Clear",
    prompt_placeholder: "e.g. Find the title on this page and click the login button",
    no_functions: "No WebMCP functions found",
    no_desc: "(No description)",
    no_models: "No models loaded",
    provider_name: "SiliconFlow",
    status_saved: "Settings saved",
    status_api_ok: "API is reachable",
    status_models_updated: "Model list updated",
    status_found_functions: (n) => `Found ${n} WebMCP functions`,
    status_running: "Running...",
    status_done: "Done",
    status_done_tokens: (total, prompt, completion) => `Done (${total} tokens, P:${prompt}, C:${completion})`,
    status_chat_cleared: "Chat cleared",
    status_boot_models_failed: "Failed to load models on startup, try again manually",
    status_init_probe_failed: "Initial probe failed",
    ask_api_key: "Please enter API key first",
    ask_pick_model: "Please select a model first",
    empty_model_reply: "Empty model response",
    empty_text_reply: "(No text output)",
    converge_fail: "Reached max tool-call rounds without convergence",
    active_tab_not_found: "Cannot find active tab, click a regular webpage tab first",
    no_exec_result: "No execution result",
    tool_exec_failed: (name) => `Failed to execute ${name}`,
    api_error: (code, msg) => `API error (${code}): ${msg}`,
    assistant_fail: (msg) => `Failed: ${msg}`,
    sys_call_tool: (name, args) => `Call tool ${name}(${JSON.stringify(args)})`,
    sys_tool_result: (name, result) => `Tool result ${name}: ${result}`,
    system_prompt:
      "You are a web automation assistant. Prefer using provided tools to operate the page and gather info. After tool use, respond concisely in English.",
    testing_unavailable: "testing-api: navigator.modelContextTesting unavailable",
    testing_callback_matched: (n, methods) => `testing-api: callback listTools() matched=${n} methods=[${methods}]`,
    testing_none: (methods, tries, summaries, errors) =>
      `testing-api: no tools methods=[${methods}] tries=[${tries}] summaries=[${summaries}] errors=[${errors}]`,
    testing_exec_fail: (aliases, errors) => `testing api failed: aliases=[${aliases}] ${errors}`,
    fallback_exec_fail: (testingErr, fallbackErr) => `${testingErr} || fallback failed: ${fallbackErr}`
  }
};

const els = {
  provider: document.getElementById("provider"),
  apiKey: document.getElementById("apiKey"),
  saveSettings: document.getElementById("saveSettings"),
  testApi: document.getElementById("testApi"),
  loadModels: document.getElementById("loadModels"),
  modelSelect: document.getElementById("modelSelect"),
  status: document.getElementById("status"),
  configCard: document.getElementById("configCard"),
  configToggle: document.getElementById("configToggle"),
  configBody: document.getElementById("configBody"),
  debugCard: document.getElementById("debugCard"),
  debugToggle: document.getElementById("debugToggle"),
  debugBody: document.getElementById("debugBody"),
  configVerified: document.getElementById("configVerified"),
  appTitle: document.getElementById("appTitle"),
  langToggle: document.getElementById("langToggle"),
  configTitle: document.getElementById("configTitle"),
  providerLabel: document.getElementById("providerLabel"),
  providerLabelText: document.getElementById("providerLabelText"),
  providerBaseUrlLabelText: document.getElementById("providerBaseUrlLabelText"),
  providerBaseUrl: document.getElementById("providerBaseUrl"),
  customProviderNameLabelText: document.getElementById("customProviderNameLabelText"),
  customProviderBaseUrlLabelText: document.getElementById("customProviderBaseUrlLabelText"),
  customProviderPanel: document.getElementById("customProviderPanel"),
  customProviderName: document.getElementById("customProviderName"),
  customProviderBaseUrl: document.getElementById("customProviderBaseUrl"),
  addProvider: document.getElementById("addProvider"),
  providerPromo: document.getElementById("providerPromo"),
  providerPromoLink: document.getElementById("providerPromoLink"),
  apiKeyLabel: document.getElementById("apiKeyLabel"),
  apiKeyLabelText: document.getElementById("apiKeyLabelText"),
  modelLabel: document.getElementById("modelLabel"),
  modelLabelText: document.getElementById("modelLabelText"),
  debugTitle: document.getElementById("debugTitle"),
  chatTitle: document.getElementById("chatTitle"),
  functionList: document.getElementById("functionList"),
  refreshFunctions: document.getElementById("refreshFunctions"),
  chatLog: document.getElementById("chatLog"),
  prompt: document.getElementById("prompt"),
  sendPrompt: document.getElementById("sendPrompt"),
  clearChat: document.getElementById("clearChat")
};

let currentFunctions = [];
let chatMessages = [];
let latestUsage = null;
let currentLang = "zh";
let customProviders = [];
let providerSettings = {};
let lastProviderId = "siliconflow";

function t(key, ...args) {
  const dict = I18N[currentLang] || I18N.zh;
  const value = dict[key];
  if (typeof value === "function") return value(...args);
  return value ?? key;
}

function setStatus(text, isError = false) {
  els.status.textContent = text;
  els.status.classList.toggle("error", isError);
}

function addMessage(role, text) {
  updateChatVisibility();
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = `[${role}] ${text}`;
  els.chatLog.appendChild(div);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function setCollapsible(cardEl, toggleBtn, bodyEl, expanded) {
  if (!cardEl || !toggleBtn || !bodyEl) return;
  cardEl.classList.toggle("open", expanded);
  toggleBtn.setAttribute("aria-expanded", String(expanded));
  const icon = toggleBtn.querySelector(".chevron");
  if (icon) icon.textContent = expanded ? "▾" : "▸";
  bodyEl.classList.toggle("hidden", !expanded);
}

function updateChatVisibility() {
  const hasMessages = chatMessages.length > 0 || els.chatLog.children.length > 0;
  els.chatLog.classList.toggle("hidden", !hasMessages);
}

function normalizeBaseUrl(raw) {
  const trimmed = String(raw || "").trim().replace(/\/+$/, "");
  return trimmed;
}

function getAllProviders() {
  return [...BUILTIN_PROVIDERS, ...customProviders];
}

function getProviderById(id) {
  return getAllProviders().find((p) => p.id === id) || null;
}

function isBuiltinProviderId(id) {
  return BUILTIN_PROVIDERS.some((p) => p.id === id);
}

function getProviderDisplayLabel(provider) {
  if (!provider) return "";
  if (provider.id === "siliconflow") return t("provider_name");
  return provider.name || provider.nameZh || provider.nameEn || provider.id;
}

function renderProviderOptions() {
  const current = els.provider.value;
  els.provider.innerHTML = "";
  for (const provider of getAllProviders()) {
    const option = document.createElement("option");
    option.value = provider.id;
    option.textContent = getProviderDisplayLabel(provider);
    els.provider.appendChild(option);
  }
  const addOption = document.createElement("option");
  addOption.value = "__add_custom__";
  addOption.textContent = t("provider_add_option");
  els.provider.appendChild(addOption);
  if (current && getProviderById(current)) {
    els.provider.value = current;
  } else if (BUILTIN_PROVIDERS[0]) {
    els.provider.value = BUILTIN_PROVIDERS[0].id;
  }
}

function getCurrentProviderSettings() {
  const providerId = els.provider.value;
  return providerSettings[providerId] || { apiKey: "", model: "" };
}

function applyCurrentProviderSettingsToInputs() {
  const st = getCurrentProviderSettings();
  els.apiKey.value = st.apiKey || "";
  const wantedModel = st.model || "";
  if (wantedModel) {
    els.modelSelect.value = wantedModel;
  }
}

function updateCurrentProviderSettingsFromInputs() {
  const providerId = els.provider.value;
  providerSettings[providerId] = {
    apiKey: els.apiKey.value.trim(),
    model: els.modelSelect.value || ""
  };
}

function syncProviderBaseUrlInput() {
  const provider = getProviderById(els.provider.value);
  if (!provider) {
    els.providerBaseUrl.value = "";
    els.providerBaseUrl.disabled = true;
    return;
  }
  els.providerBaseUrl.value = provider.baseUrl || "";
  els.providerBaseUrl.disabled = isBuiltinProviderId(provider.id);
}

function updateProviderBaseUrlFromInput() {
  const providerId = els.provider.value;
  if (!providerId || providerId === "__add_custom__") return;
  if (isBuiltinProviderId(providerId)) return;

  const next = normalizeBaseUrl(els.providerBaseUrl.value || "");
  if (!next) return;
  if (!/^https?:\/\//i.test(next)) throw new Error(t("add_provider_bad_url"));
  const idx = customProviders.findIndex((p) => p.id === providerId);
  if (idx >= 0) {
    customProviders[idx] = { ...customProviders[idx], baseUrl: next };
  }
}

function updateProviderSettingsById(providerId, apiKey, model) {
  if (!providerId) return;
  providerSettings[providerId] = {
    apiKey: String(apiKey || "").trim(),
    model: model || ""
  };
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  els.appTitle.textContent = t("app_title");
  els.configTitle.textContent = t("config_title");
  els.providerLabelText.textContent = t("provider_label");
  els.providerBaseUrlLabelText.textContent = t("provider_base_url_label");
  els.customProviderNameLabelText.textContent = t("custom_provider_name_label");
  els.customProviderBaseUrlLabelText.textContent = t("custom_provider_base_url_label");
  els.customProviderName.placeholder =
    currentLang === "zh" ? "例如：OpenAI / OpenRouter / Azure Proxy" : "e.g. OpenAI / OpenRouter / Azure Proxy";
  els.customProviderBaseUrl.placeholder =
    currentLang === "zh" ? "例如：https://api.openai.com/v1" : "e.g. https://api.openai.com/v1";
  els.apiKeyLabelText.textContent = t("api_key_label");
  els.modelLabelText.textContent = t("model_label");
  els.debugTitle.textContent = t("debug_title");
  els.chatTitle.textContent = t("chat_title");
  els.addProvider.textContent = t("add_provider");
  els.saveSettings.textContent = t("save");
  els.testApi.textContent = t("test_api");
  els.loadModels.textContent = t("load_models");
  els.refreshFunctions.textContent = t("refresh_functions");
  els.sendPrompt.textContent = t("send");
  els.clearChat.textContent = t("clear");
  els.prompt.placeholder = t("prompt_placeholder");
  els.langToggle.textContent = currentLang === "zh" ? "EN" : "中";
  renderProviderOptions();
  syncProviderBaseUrlInput();
  if (els.providerPromoLink) {
    els.providerPromoLink.textContent = `${t("provider_promo_link")} ${t("provider_promo_text")}`;
  }
  updateProviderPromoVisibility();
  updateCustomProviderPanelVisibility();
  if (els.modelSelect.options.length === 1 && !els.modelSelect.options[0].value) {
    els.modelSelect.options[0].textContent = t("no_models");
  }
  renderFunctions(currentFunctions);
}

function updateProviderPromoVisibility() {
  if (!els.providerPromo) return;
  const isSiliconFlow = els.provider.value === "siliconflow";
  els.providerPromo.classList.toggle("hidden", !isSiliconFlow);
}

function updateCustomProviderPanelVisibility() {
  if (!els.customProviderPanel) return;
  els.customProviderPanel.classList.toggle("hidden", els.provider.value !== "__add_custom__");
}

function summarizeToolResult(result) {
  try {
    const text = JSON.stringify(result);
    return text.length > 500 ? `${text.slice(0, 500)}...(truncated)` : text;
  } catch {
    return String(result);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderFunctions(functions) {
  els.functionList.innerHTML = "";
  if (!functions.length) {
    const li = document.createElement("li");
    li.className = "function-item";
    li.textContent = t("no_functions");
    els.functionList.appendChild(li);
    return;
  }

  for (const fn of functions) {
    const li = document.createElement("li");
    li.className = "function-item";

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = fn.name;

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = fn.description || t("no_desc");

    li.append(name, desc);
    els.functionList.appendChild(li);
  }
}

function setConfigVerifiedHint(provider, model) {
  if (!els.configVerified) return;
  const p = provider || "";
  const m = model || "";
  if (!p && !m) {
    els.configVerified.textContent = "";
    return;
  }
  els.configVerified.textContent = `${p}${m ? ` / ${m}` : ""}`;
}

function getProviderDisplayName(valueOrLabel) {
  const raw = String(valueOrLabel || "").trim();
  if (!raw) return "";
  if (getProviderById(raw)) return getProviderDisplayLabel(getProviderById(raw));
  if (raw.includes("硅基流动") || raw.includes("SiliconFlow")) return t("provider_name");
  return raw.replace(/\s*\(.*?\)\s*/g, "").trim();
}

async function clearConfigVerifiedHint() {
  setConfigVerifiedHint("", "");
  await chrome.storage.local.remove(["verifiedProvider", "verifiedModel"]);
}

async function refreshConfigVerifiedHintFromStorage() {
  const data = await chrome.storage.local.get(["verifiedProvider", "verifiedModel", "activeProvider"]);
  setConfigVerifiedHint(getProviderDisplayName(data.verifiedProvider || data.activeProvider || ""), data.verifiedModel || "");
}

function makeCustomProviderId(name) {
  const slug = String(name || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `custom-${slug || "provider"}-${Date.now().toString(36).slice(-6)}`;
}

async function addCustomProvider() {
  const name = String(els.customProviderName.value || "").trim();
  const baseUrl = normalizeBaseUrl(els.customProviderBaseUrl.value || "");
  if (!name) throw new Error(t("add_provider_need_name"));
  if (!baseUrl) throw new Error(t("add_provider_need_url"));
  if (!/^https?:\/\//i.test(baseUrl)) throw new Error(t("add_provider_bad_url"));
  if (getAllProviders().some((p) => (p.name || p.nameZh || p.nameEn || "").toLowerCase() === name.toLowerCase())) {
    throw new Error(t("add_provider_exists"));
  }

  const provider = {
    id: makeCustomProviderId(name),
    name,
    baseUrl
  };
  customProviders.push(provider);
  renderProviderOptions();
  els.provider.value = provider.id;
  syncProviderBaseUrlInput();
  updateCustomProviderPanelVisibility();
  updateProviderPromoVisibility();
  els.customProviderName.value = "";
  els.customProviderBaseUrl.value = "";
  applyCurrentProviderSettingsToInputs();
  await saveSettings();
  setStatus(t("add_provider_ok"));
}

function normalizeToolListLike(input) {
  const out = [];
  const seen = new Set();
  const push = (item) => {
    if (!item) return;
    if (typeof item === "string") {
      if (seen.has(item)) return;
      seen.add(item);
      out.push({
        name: item,
        description: "",
        input_schema: { type: "object", properties: {} }
      });
      return;
    }
    const nameFromGetter =
      typeof item.getName === "function"
        ? (() => {
            try {
              return item.getName();
            } catch {
              return "";
            }
          })()
        : "";
    const name = item.name || item.id || item.toolName || item.tool_name;
    const finalName = name || nameFromGetter;
    if (!finalName || seen.has(finalName)) return;
    seen.add(finalName);
    const descFromGetter =
      typeof item.getDescription === "function"
        ? (() => {
            try {
              return item.getDescription();
            } catch {
              return "";
            }
          })()
        : "";
    const schemaFromGetter =
      typeof item.getInputSchema === "function"
        ? (() => {
            try {
              return item.getInputSchema();
            } catch {
              return null;
            }
          })()
        : null;
    out.push({
      name: finalName,
      description: item.description || item.toolDescription || item.tool_description || descFromGetter || "",
      input_schema:
        item.inputSchema ||
        item.input_schema ||
        item.inputschema ||
        item.toolInputSchema ||
        item.tool_input_schema ||
        schemaFromGetter ||
        item.parameters ||
        { type: "object", properties: {} }
    });
  };

  const walk = (value) => {
    if (!value) return;
    if (value instanceof Map) {
      for (const [k, v] of value.entries()) {
        if (v && typeof v === "object") push({ ...v, name: v.name || k });
      }
      return;
    }
    if (Array.isArray(value)) {
      for (const v of value) push(v);
      return;
    }
    if (typeof value?.[Symbol.iterator] === "function") {
      for (const v of value) push(v);
      return;
    }
    if (typeof value === "object") {
      const wrapKeys = ["tools", "functions", "items", "data", "result", "entries", "value"];
      for (const key of wrapKeys) walk(value[key]);
      for (const [k, v] of Object.entries(value)) {
        if (
          v &&
          typeof v === "object" &&
          (v.name || v.id || v.toolName || v.inputSchema || v.input_schema || v.toolInputSchema || v.parameters)
        ) {
          push({ ...v, name: v.name || v.id || v.toolName || k });
        }
      }
    }
  };

  walk(input);
  return out;
}

function getObjectMethodNames(obj) {
  if (!obj) return [];
  const names = new Set();
  try {
    for (const k of Object.getOwnPropertyNames(obj)) {
      if (typeof obj[k] === "function") names.add(k);
    }
  } catch {}
  try {
    const proto = Object.getPrototypeOf(obj);
    if (proto) {
      for (const k of Object.getOwnPropertyNames(proto)) {
        if (k === "constructor") continue;
        if (typeof obj[k] === "function") names.add(k);
      }
    }
  } catch {}
  return Array.from(names);
}

async function listToolsViaTestingApi(tabId) {
  const api = navigator.modelContextTesting;
  if (!api) {
    return { functions: [], debugText: t("testing_unavailable") };
  }

  const methodNames = getObjectMethodNames(api);
  const candidates = ["listTools", "getTools", "tools", "listWebMcpTools", "getWebMcpTools", "listToolsForTab"];
  const tries = [];
  const errors = [];
  let tools = [];

  const argVariants = [[], [tabId], [{ tabId }], [{ tab_id: tabId }], [{ targetTabId: tabId }]];
  const summaries = [];

  for (const method of candidates) {
    if (!methodNames.includes(method)) continue;
    for (const args of argVariants) {
      tries.push(`${method}(${args.map((x) => (typeof x === "object" ? JSON.stringify(x) : String(x))).join(",")})`);
      try {
        // eslint-disable-next-line no-await-in-loop
        const rs = await api[method](...args);
        try {
          const t = Object.prototype.toString.call(rs);
          const keys = rs && typeof rs === "object" ? Object.keys(rs).slice(0, 20).join(",") : "-";
          const length = Array.isArray(rs) ? rs.length : "-";
          let first = "-";
          if (Array.isArray(rs) && rs.length > 0) {
            const f = rs[0];
            if (typeof f === "string") first = `string:${f}`;
            else if (f && typeof f === "object") {
              const fkeys = Object.keys(f).slice(0, 10).join(",");
              let fname = "";
              try {
                fname = f.name || f.id || f.toolName || (typeof f.getName === "function" ? f.getName() : "");
              } catch {}
              first = `object{name=${fname || "-"},keys=[${fkeys}]}`;
            } else {
              first = typeof f;
            }
          }
          summaries.push(`${method} -> ${t} len=${length} keys=[${keys}] first=${first}`);
        } catch {}
        const normalized = normalizeToolListLike(rs);
        if (normalized.length) {
          tools = normalized;
          return {
            functions: tools,
            debugText: `testing-api: method=${method} matched=${tools.length} methods=[${methodNames.join(",")}] tries=[${tries.join(
              " ; "
            )}]`
          };
        }
      } catch (err) {
        errors.push(`${method}: ${String(err?.message || err)}`);
      }
    }
  }

  if (methodNames.includes("registerToolsChangedCallback")) {
    try {
      let fired = false;
      const maybeUnsub = api.registerToolsChangedCallback(() => {
        fired = true;
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (typeof maybeUnsub === "function") {
        try {
          maybeUnsub();
        } catch {}
      }
      if (fired && methodNames.includes("listTools")) {
        try {
          const rs = await api.listTools();
          const normalized = normalizeToolListLike(rs);
          if (normalized.length) {
            return {
              functions: normalized,
              debugText: t("testing_callback_matched", normalized.length, methodNames.join(","))
            };
          }
        } catch (err) {
          errors.push(`post-callback listTools(): ${String(err?.message || err)}`);
        }
      }
    } catch (err) {
      errors.push(`registerToolsChangedCallback: ${String(err?.message || err)}`);
    }
  }

  return {
    functions: [],
    debugText: t(
      "testing_none",
      methodNames.join(","),
      tries.join(" ; "),
      summaries.join(" || ") || "-",
      errors.join(" || ") || "-"
    )
  };
}

async function getActiveTabId() {
  const focused = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (focused.length?.[0]?.id) return focused[0].id;

  const windows = await chrome.windows.getAll({ populate: true, windowTypes: ["normal"] });
  for (const win of windows) {
    const tab = (win.tabs || []).find((item) => item.active && item.id);
    if (tab?.id) return tab.id;
  }

  const anyActive = await chrome.tabs.query({ active: true });
  if (anyActive.length?.[0]?.id) return anyActive[0].id;

  throw new Error(t("active_tab_not_found"));
}

async function probeWebMcp(tabId) {
  const results = await chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    world: "MAIN",
    func: async () => {
      const isObject = (value) => value !== null && typeof value === "object";
      const isCallable = (v) => typeof v === "function";
      const looksLikeToolContainer = (v) => {
        if (!isObject(v)) return false;
        if (isCallable(v.call) || isCallable(v.invoke) || isCallable(v.listTools)) return true;
        const hasPool = (pool) => Array.isArray(pool) || isObject(pool);
        return hasPool(v.functions) || hasPool(v.tools);
      };
      const toNameList = (obj) => {
        try {
          return Object.getOwnPropertyNames(obj || {});
        } catch {
          return [];
        }
      };
      const directGlobalKeys = ["webmcp", "WebMCP", "__webmcp__", "__WEBMCP__", "mcp", "__WEBMCP_CAPTURED_TOOLS__"];
      const keywordGlobalKeys = toNameList(window)
        .filter((key) => /mcp|tool|function/i.test(key))
        .slice(0, 60);
      const pickedKeys = Array.from(new Set([...directGlobalKeys, ...keywordGlobalKeys]));

      const seen = new Set();
      const makeCandidate = (key, value, mode = "global") => ({ key, value, mode });
      const pushIf = (arr, key, value, mode) => {
        if (!value) return;
        const id = `${mode}:${key}`;
        if (seen.has(id)) return;
        seen.add(id);
        arr.push(makeCandidate(key, value, mode));
      };
      const candidates = [];
      for (const key of directGlobalKeys) {
        pushIf(candidates, key, window[key], "direct");
      }
      pushIf(candidates, "navigator.modelContext", navigator.modelContext, "navigator");
      for (const key of keywordGlobalKeys) {
        pushIf(candidates, key, window[key], "keyword");
      }

      // Structural scan: identify likely MCP containers even when key name is unrelated.
      for (const key of toNameList(window).slice(0, 300)) {
        let value;
        try {
          value = window[key];
        } catch {
          continue;
        }
        if (looksLikeToolContainer(value)) {
          pushIf(candidates, key, value, "shape");
        }
        if (!isObject(value)) continue;

        // One-level nested scan for app namespaces.
        const childKeys = toNameList(value).slice(0, 40);
        for (const child of childKeys) {
          let sub;
          try {
            sub = value[child];
          } catch {
            continue;
          }
          if (looksLikeToolContainer(sub)) {
            pushIf(candidates, `${key}.${child}`, sub, "shape-nested");
          }
        }
      }

      const normalizePool = (pool, map) => {
        if (!pool) return;
        if (pool instanceof Map) {
          for (const [k, v] of pool.entries()) {
            const name = (isObject(v) && (v.name || v.id)) || k;
            if (!name) continue;
            const desc = isObject(v) ? v.description || "" : "";
            const schema = isObject(v)
              ? v.inputSchema || v.input_schema || v.parameters || { type: "object", properties: {} }
              : { type: "object", properties: {} };
            map.set(name, { name, description: desc, input_schema: schema });
          }
          return;
        }
        if (Array.isArray(pool)) {
          for (const item of pool) {
            if (!item) continue;
            const name = item.name || item.id;
            if (!name) continue;
            map.set(name, {
              name,
              description: item.description || "",
              input_schema: item.inputSchema || item.input_schema || item.parameters || { type: "object", properties: {} }
            });
          }
          return;
        }
        if (isObject(pool)) {
          for (const [name, value] of Object.entries(pool)) {
            if (!name) continue;
            const desc = isObject(value) ? value.description || "" : "";
            const inputSchema = isObject(value)
              ? value.inputSchema || value.input_schema || value.parameters || { type: "object", properties: {} }
              : { type: "object", properties: {} };
            map.set(name, { name, description: desc, input_schema: inputSchema });
          }
        }
      };

      const normalizeMaybeWrapped = (value, map) => {
        if (!value) return;
        normalizePool(value, map);
        if (!isObject(value)) return;
        const wrapKeys = ["tools", "functions", "items", "data", "result"];
        for (const key of wrapKeys) {
          normalizePool(value[key], map);
        }
      };

      const normalize = async (inputCandidates) => {
        const map = new Map();
        const candidateNotes = [];
        const candidateErrors = [];
        const candidateMethods = [];
        for (const item of inputCandidates) {
          const c = item.value;
          if (!isObject(c)) continue;
          candidateNotes.push(`${item.mode}:${item.key}`);
          try {
            const own = Object.getOwnPropertyNames(c).slice(0, 40);
            const proto = Object.getPrototypeOf(c);
            const protoMethods = proto
              ? Object.getOwnPropertyNames(proto).filter((k) => typeof c[k] === "function").slice(0, 40)
              : [];
            candidateMethods.push(`${item.mode}:${item.key} own=[${own.join(",")}] proto=[${protoMethods.join(",")}]`);
          } catch {}

          const pools = [c.functions, c.tools, c._tools, c.registry, c.toolRegistry];
          for (const pool of pools) {
            normalizeMaybeWrapped(pool, map);
          }

          if (typeof c.tools === "function") {
            try {
              normalizeMaybeWrapped(await c.tools(), map);
            } catch (err) {
              candidateErrors.push(`${item.mode}:${item.key}.tools() => ${String(err?.message || err)}`);
            }
          }
          if (typeof c.functions === "function") {
            try {
              normalizeMaybeWrapped(await c.functions(), map);
            } catch (err) {
              candidateErrors.push(`${item.mode}:${item.key}.functions() => ${String(err?.message || err)}`);
            }
          }

          if (typeof c.listTools === "function") {
            try {
              normalizeMaybeWrapped(await c.listTools(), map);
            } catch (err1) {
              candidateErrors.push(`${item.mode}:${item.key}.listTools() => ${String(err1?.message || err1)}`);
              try {
                normalizeMaybeWrapped(await c.listTools({}), map);
              } catch (err2) {
                candidateErrors.push(`${item.mode}:${item.key}.listTools({}) => ${String(err2?.message || err2)}`);
              }
            }
          }
          if (typeof c.getTools === "function") {
            try {
              normalizeMaybeWrapped(await c.getTools(), map);
            } catch (err1) {
              candidateErrors.push(`${item.mode}:${item.key}.getTools() => ${String(err1?.message || err1)}`);
              try {
                normalizeMaybeWrapped(await c.getTools({}), map);
              } catch (err2) {
                candidateErrors.push(`${item.mode}:${item.key}.getTools({}) => ${String(err2?.message || err2)}`);
              }
            }
          }
          if (typeof c[Symbol.asyncIterator] === "function") {
            try {
              const arr = [];
              for await (const chunk of c) {
                arr.push(chunk);
                if (arr.length >= 20) break;
              }
              normalizeMaybeWrapped(arr, map);
            } catch (err) {
              candidateErrors.push(`${item.mode}:${item.key}[Symbol.asyncIterator] => ${String(err?.message || err)}`);
            }
          }
        }
        return { functions: Array.from(map.values()), candidateNotes, candidateErrors, candidateMethods };
      };

      const normalized = await normalize(candidates);
      return {
        functions: normalized.functions,
        debug: {
          directGlobalKeys,
          pickedKeys,
          candidateNotes: normalized.candidateNotes,
          candidateTotal: candidates.length,
          candidateErrors: normalized.candidateErrors,
          candidateMethods: normalized.candidateMethods
        }
      };
    }
  });

  const all = [];
  const debugRows = [];
  for (const item of results || []) {
    const list = item?.result?.functions;
    if (Array.isArray(list)) all.push(...list);

    const frameId = item?.frameId ?? "main";
    const dbg = item?.result?.debug || {};
    const line = [
      `frame=${frameId}`,
      `functions=${Array.isArray(list) ? list.length : 0}`,
      `candidateTotal=${dbg.candidateTotal || 0}`,
      `candidates=${(dbg.candidateNotes || []).slice(0, 10).join(",") || "-"}`,
      `pickedKeys=${(dbg.pickedKeys || []).slice(0, 12).join(",") || "-"}`,
      `errors=${(dbg.candidateErrors || []).slice(0, 4).join(" || ") || "-"}`,
      `methods=${(dbg.candidateMethods || []).slice(0, 2).join(" || ") || "-"}`
    ].join(" | ");
    debugRows.push(line);
  }

  const dedup = new Map();
  for (const fn of all) dedup.set(fn.name, fn);
  return {
    functions: Array.from(dedup.values()),
    debugText: debugRows.join("\n")
  };
}

async function executeWebMcpFunction(tabId, name, args) {
  const results = await chrome.scripting.executeScript({
    target: { tabId },
    world: "MAIN",
    args: [name, args || {}],
    func: async (fnName, fnArgs) => {
      const capturedExecutors = window.__WEBMCP_CAPTURED_EXECUTORS__;
      if (capturedExecutors && typeof capturedExecutors[fnName] === "function") {
        try {
          const toSerializable = (value) => {
            try {
              return JSON.parse(JSON.stringify(value));
            } catch {
              return { value: String(value) };
            }
          };
          return { ok: true, result: toSerializable(await capturedExecutors[fnName](fnArgs || {})) };
        } catch (err) {
          return { ok: false, error: String(err?.message || err) };
        }
      }

      const isObject = (value) => value !== null && typeof value === "object";
      const isCallable = (v) => typeof v === "function";
      const toNameList = (obj) => {
        try {
          return Object.getOwnPropertyNames(obj || {});
        } catch {
          return [];
        }
      };
      const looksLikeToolContainer = (v) => {
        if (!isObject(v)) return false;
        if (isCallable(v.call) || isCallable(v.invoke) || isCallable(v.listTools)) return true;
        const hasPool = (pool) => Array.isArray(pool) || isObject(pool);
        return hasPool(v.functions) || hasPool(v.tools);
      };

      const directGlobalKeys = ["webmcp", "WebMCP", "__webmcp__", "__WEBMCP__", "mcp", "__WEBMCP_CAPTURED_TOOLS__"];
      const candidates = [];
      for (const key of directGlobalKeys) {
        if (window[key]) candidates.push(window[key]);
      }
      if (navigator.modelContext) candidates.push(navigator.modelContext);
      for (const key of toNameList(window).slice(0, 300)) {
        let value;
        try {
          value = window[key];
        } catch {
          continue;
        }
        if (looksLikeToolContainer(value)) candidates.push(value);
        if (!isObject(value)) continue;
        for (const child of toNameList(value).slice(0, 40)) {
          let sub;
          try {
            sub = value[child];
          } catch {
            continue;
          }
          if (looksLikeToolContainer(sub)) candidates.push(sub);
        }
      }

      const toSerializable = (value) => {
        try {
          return JSON.parse(JSON.stringify(value));
        } catch {
          return { value: String(value) };
        }
      };

      const execCallTool = async (obj) => {
        const errors = [];
        if (typeof obj.callTool === "function") {
          const attempts = [
            () => obj.callTool(fnName, fnArgs),
            () => obj.callTool({ name: fnName, arguments: fnArgs }),
            () => obj.callTool({ toolName: fnName, arguments: fnArgs })
          ];
          for (const attempt of attempts) {
            try {
              return { ok: true, result: toSerializable(await attempt()) };
            } catch (err) {
              errors.push(String(err?.message || err));
            }
          }
          return { ok: false, error: `callTool failed: ${errors.join(" | ")}` };
        }
        return { ok: false, error: "callTool not available" };
      };

      for (const c of candidates) {
        if (!c) continue;
        try {
          if (typeof c.callTool === "function") {
            const r = await execCallTool(c);
            if (r.ok) return r;
          }
          if (typeof c.invokeTool === "function") {
            return { ok: true, result: toSerializable(await c.invokeTool(fnName, fnArgs)) };
          }
          if (typeof c.executeTool === "function") {
            return { ok: true, result: toSerializable(await c.executeTool(fnName, fnArgs)) };
          }
          if (typeof c.call === "function") return { ok: true, result: toSerializable(await c.call(fnName, fnArgs)) };
          if (typeof c.invoke === "function") {
            return { ok: true, result: toSerializable(await c.invoke(fnName, fnArgs)) };
          }

          const pools = [c.functions, c.tools, c._tools, c.registry, c.toolRegistry];
          for (const pool of pools) {
            if (!pool) continue;
            const fn = pool instanceof Map
              ? pool.get(fnName)
              : Array.isArray(pool)
                ? pool.find((item) => item && (item.name === fnName || item.id === fnName))
                : pool[fnName];
            if (!fn) continue;

            if (typeof fn === "function") return { ok: true, result: toSerializable(await fn(fnArgs)) };
            if (typeof fn.execute === "function") return { ok: true, result: toSerializable(await fn.execute(fnArgs)) };
            if (typeof fn.run === "function") return { ok: true, result: toSerializable(await fn.run(fnArgs)) };
            if (typeof fn.invoke === "function") return { ok: true, result: toSerializable(await fn.invoke(fnArgs)) };
            if (typeof fn.call === "function") return { ok: true, result: toSerializable(await fn.call(fnArgs)) };
          }
        } catch (err) {
          return { ok: false, error: String(err?.message || err) };
        }
      }

      return { ok: false, error: `Function not found: ${fnName}` };
    }
  });

  return results?.[0]?.result || { ok: false, error: t("no_exec_result") };
}

async function getFunctionsFromPage() {
  const tabId = await getActiveTabId();
  const fromTesting = await listToolsViaTestingApi(tabId);
  const probe = await probeWebMcp(tabId);
  const dedup = new Map();
  for (const fn of [...(fromTesting.functions || []), ...(probe.functions || [])]) {
    if (!fn?.name) continue;
    dedup.set(fn.name, { ...fn, source: "webmcp" });
  }
  currentFunctions = Array.from(dedup.values());
  renderFunctions(currentFunctions);
}

async function executeFunctionOnPage(name, args) {
  const tabId = await getActiveTabId();
  const api = navigator.modelContextTesting;
  let testingError = null;
  if (api) {
    const methodNames = getObjectMethodNames(api);
    const callCandidates = ["callTool", "invokeTool", "executeTool", "runTool"];
    const baseArgs = args || {};
    const toolNameAliases = [name, `script_tools.${name}`, `todo-webmcp.${name}`, `webmcp.${name}`];
    const variantsByMethod = {
      executeTool: toolNameAliases.flatMap((toolName) => [
        [toolName, { arguments: baseArgs, tabId }],
        [toolName, { arguments: baseArgs, tab_id: tabId }],
        [toolName, { arguments: baseArgs, targetTabId: tabId }],
        [toolName, { args: baseArgs, tabId }],
        [toolName, baseArgs]
      ]),
      callTool: [
        [name, baseArgs],
        [{ name, arguments: baseArgs }],
        [{ toolName: name, arguments: baseArgs }],
        [tabId, name, baseArgs],
        [tabId, { name, arguments: baseArgs }]
      ],
      invokeTool: [
        [name, baseArgs],
        [{ name, arguments: baseArgs }],
        [tabId, name, baseArgs],
        [tabId, { name, arguments: baseArgs }]
      ],
      runTool: [
        [name, baseArgs],
        [{ name, arguments: baseArgs }],
        [tabId, name, baseArgs],
        [tabId, { name, arguments: baseArgs }]
      ]
    };
    const resolveCrossDoc = async (value) => {
      if (!methodNames.includes("getCrossDocumentScriptToolResult")) return value;

      const ids = new Set();
      const collect = (v) => {
        if (!v || typeof v !== "object") return;
        const keys = ["resultId", "scriptToolResultId", "requestId", "operationId", "id"];
        for (const key of keys) {
          const id = v[key];
          if (typeof id === "string" || typeof id === "number") ids.add(id);
        }
        if (v.result && typeof v.result === "object") collect(v.result);
      };
      collect(value);
      if (!ids.size) return value;

      const idVariants = [];
      for (const id of ids) {
        idVariants.push([id], [{ id }], [{ resultId: id }], [{ requestId: id }], [{ scriptToolResultId: id }]);
      }

      let latest = value;
      for (let i = 0; i < 6; i += 1) {
        for (const callArgs of idVariants) {
          try {
            // eslint-disable-next-line no-await-in-loop
            const rs = await api.getCrossDocumentScriptToolResult(...callArgs);
            if (!rs) continue;
            latest = rs;
            const pending = rs.status === "pending" || rs.pending === true;
            if (!pending) return rs;
          } catch {}
        }
        // eslint-disable-next-line no-await-in-loop
        await delay(150);
      }
      return latest;
    };

    const allErrors = [];
    for (const method of callCandidates) {
      if (!methodNames.includes(method)) continue;
      const variants = variantsByMethod[method] || [[name, baseArgs]];
      for (const callArgs of variants) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const rs = await api[method](...callArgs);
          // eslint-disable-next-line no-await-in-loop
          return await resolveCrossDoc(rs);
        } catch (err) {
          allErrors.push(`${method}(${callArgs.length} args): ${String(err?.message || err)}`);
        }
      }
    }
    if (allErrors.length) {
      testingError = t("testing_exec_fail", toolNameAliases.join(","), allErrors.join(" || "));
    }
  }

  const res = await executeWebMcpFunction(tabId, name, args);
  if (!res?.ok) {
    if (testingError) {
      throw new Error(t("fallback_exec_fail", testingError, res?.error || t("tool_exec_failed", name)));
    }
    throw new Error(res?.error || t("tool_exec_failed", name));
  }
  return res.result;
}

function toToolSpec(functions) {
  return functions.map((fn) => ({
    type: "function",
    function: {
      name: fn.name,
      description: fn.description || "WebMCP function",
      parameters: fn.input_schema || { type: "object", properties: {} }
    }
  }));
}


async function apiRequest(path, body, method = "POST") {
  const provider = getProviderById(els.provider.value);
  const apiKey = els.apiKey.value.trim();
  if (!provider?.baseUrl) throw new Error(t("provider_missing_base_url"));
  if (!apiKey) throw new Error(t("ask_api_key"));
  const base = normalizeBaseUrl(provider.baseUrl);
  const finalPath = path.startsWith("/") ? path : `/${path}`;

  const response = await fetch(`${base}${finalPath}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(t("api_error", response.status, text.slice(0, 300)));
  }

  return response.json();
}

async function loadModels() {
  const data = await apiRequest("/models", null, "GET");
  const models = Array.isArray(data.data) ? data.data : [];

  els.modelSelect.innerHTML = "";
  for (const model of models) {
    const option = document.createElement("option");
    option.value = model.id;
    option.textContent = model.id;
    els.modelSelect.appendChild(option);
  }

  if (!models.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = t("no_models");
    els.modelSelect.appendChild(option);
  }

  const wantedModel = getCurrentProviderSettings().model;
  if (wantedModel && models.some((m) => m?.id === wantedModel)) {
    els.modelSelect.value = wantedModel;
  }
}

async function runAgent(userText) {
  const model = els.modelSelect.value;
  if (!model) throw new Error(t("ask_pick_model"));

  const system = {
    role: "system",
    content:
      t("system_prompt")
  };

  const history = [
    system,
    ...chatMessages,
    {
      role: "user",
      content: userText
    }
  ];

  const tools = toToolSpec(currentFunctions);
  let usagePrompt = 0;
  let usageCompletion = 0;
  let usageTotal = 0;

  for (let i = 0; i < 8; i += 1) {
    const payload = {
      model,
      messages: history,
      temperature: 0.2,
      tools: tools.length ? tools : undefined,
      tool_choice: tools.length ? "auto" : undefined
    };

    const data = await apiRequest("/chat/completions", payload, "POST");
    if (data?.usage) {
      usagePrompt += Number(data.usage.prompt_tokens || 0);
      usageCompletion += Number(data.usage.completion_tokens || 0);
      usageTotal += Number(data.usage.total_tokens || 0);
    }
    const choice = data.choices?.[0]?.message;
    if (!choice) throw new Error(t("empty_model_reply"));

    history.push(choice);

    const toolCalls = choice.tool_calls || [];
    if (!toolCalls.length) {
      const content = choice.content || t("empty_text_reply");
      chatMessages.push({ role: "user", content: userText });
      chatMessages.push({ role: "assistant", content });
      latestUsage =
        usageTotal > 0 || usagePrompt > 0 || usageCompletion > 0
          ? { total: usageTotal, prompt: usagePrompt, completion: usageCompletion }
          : null;
      return content;
    }

    for (const call of toolCalls) {
      const name = call.function?.name;
      if (!name) continue;

      let args = {};
      try {
        args = call.function?.arguments ? JSON.parse(call.function.arguments) : {};
      } catch {
        args = {};
      }

      addMessage("system", t("sys_call_tool", name, args));

      let result;
      try {
        result = await executeFunctionOnPage(name, args);
      } catch (err) {
        result = { error: String(err.message || err) };
      }
      addMessage("system", t("sys_tool_result", name, summarizeToolResult(result)));

      history.push({
        role: "tool",
        tool_call_id: call.id,
        content: JSON.stringify(result)
      });
    }
  }

  throw new Error(t("converge_fail"));
}

async function saveSettings() {
  updateProviderBaseUrlFromInput();
  updateCurrentProviderSettingsFromInputs();
  await chrome.storage.local.set({
    activeProvider: els.provider.value,
    providerSettings,
    customProviders
  });
}

async function loadSettings() {
  const data = await chrome.storage.local.get([
    "activeProvider",
    "providerSettings",
    "customProviders",
    "verifiedProvider",
    "verifiedModel",
    "uiLang"
  ]);
  customProviders = Array.isArray(data.customProviders)
    ? data.customProviders
        .filter((p) => p && p.id && p.name && p.baseUrl)
        .map((p) => ({ ...p, baseUrl: normalizeBaseUrl(p.baseUrl) }))
    : [];
  providerSettings = data.providerSettings && typeof data.providerSettings === "object" ? data.providerSettings : {};
  currentLang = data.uiLang === "en" ? "en" : "zh";
  applyLanguage();
  if (data.activeProvider && getProviderById(data.activeProvider)) {
    els.provider.value = data.activeProvider;
  }
  lastProviderId = els.provider.value || BUILTIN_PROVIDERS[0].id;
  syncProviderBaseUrlInput();
  applyCurrentProviderSettingsToInputs();

  await loadModels().catch(() => {
    setStatus(t("status_boot_models_failed"), true);
  });

  applyCurrentProviderSettingsToInputs();
  setConfigVerifiedHint(getProviderDisplayName(data.verifiedProvider || data.activeProvider || ""), data.verifiedModel || "");
}

els.saveSettings.addEventListener("click", async () => {
  try {
    await saveSettings();
    setStatus(t("status_saved"));
  } catch (err) {
    setStatus(String(err.message || err), true);
  }
});

els.testApi.addEventListener("click", async () => {
  try {
    await apiRequest("/models", null, "GET");
    const providerText = getProviderDisplayName(els.provider.value);
    const modelText = els.modelSelect.value || "";
    setConfigVerifiedHint(providerText, modelText);
    await chrome.storage.local.set({
      verifiedProvider: providerText,
      verifiedModel: modelText
    });
    setStatus(t("status_api_ok"));
  } catch (err) {
    setStatus(String(err.message || err), true);
  }
});

els.loadModels.addEventListener("click", async () => {
  try {
    await loadModels();
    await saveSettings();
    setStatus(t("status_models_updated"));
  } catch (err) {
    setStatus(String(err.message || err), true);
  }
});

els.refreshFunctions.addEventListener("click", async () => {
  try {
    await getFunctionsFromPage();
    setStatus(t("status_found_functions", currentFunctions.length));
  } catch (err) {
    setStatus(String(err.message || err), true);
  }
});

els.sendPrompt.addEventListener("click", async () => {
  const text = els.prompt.value.trim();
  if (!text) return;

  addMessage("user", text);
  els.prompt.value = "";

  try {
    setStatus(t("status_running"));
    latestUsage = null;
    await getFunctionsFromPage();
    const answer = await runAgent(text);
    addMessage("assistant", answer);
    if (latestUsage?.total) {
      setStatus(t("status_done_tokens", latestUsage.total, latestUsage.prompt, latestUsage.completion));
    } else {
      setStatus(t("status_done"));
    }
    await saveSettings();
  } catch (err) {
    const msg = String(err.message || err);
    addMessage("assistant", t("assistant_fail", msg));
    setStatus(msg, true);
  }
});

els.clearChat.addEventListener("click", () => {
  chatMessages = [];
  els.chatLog.innerHTML = "";
  updateChatVisibility();
  setStatus(t("status_chat_cleared"));
});

els.provider.addEventListener("change", async () => {
  if (els.provider.value === "__add_custom__") {
    syncProviderBaseUrlInput();
    updateCustomProviderPanelVisibility();
    updateProviderPromoVisibility();
    return;
  }

  updateProviderSettingsById(lastProviderId, els.apiKey.value, els.modelSelect.value);
  lastProviderId = els.provider.value;
  syncProviderBaseUrlInput();
  applyCurrentProviderSettingsToInputs();
  updateCustomProviderPanelVisibility();
  updateProviderPromoVisibility();
  clearConfigVerifiedHint().catch(() => {});
  await saveSettings();
  await loadModels().catch(() => {});
  applyCurrentProviderSettingsToInputs();
});

els.modelSelect.addEventListener("change", () => {
  updateCurrentProviderSettingsFromInputs();
  clearConfigVerifiedHint().catch(() => {});
});

els.apiKey.addEventListener("input", () => {
  updateCurrentProviderSettingsFromInputs();
  clearConfigVerifiedHint().catch(() => {});
});

els.addProvider.addEventListener("click", async () => {
  try {
    await addCustomProvider();
    lastProviderId = els.provider.value;
    await loadModels().catch(() => {});
    applyCurrentProviderSettingsToInputs();
  } catch (err) {
    setStatus(String(err.message || err), true);
  }
});

els.langToggle.addEventListener("click", async () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage();
  await chrome.storage.local.set({ uiLang: currentLang });
  await refreshConfigVerifiedHintFromStorage();
});

els.configToggle.addEventListener("click", () => {
  const expanded = els.configToggle.getAttribute("aria-expanded") !== "true";
  setCollapsible(els.configCard, els.configToggle, els.configBody, expanded);
});

els.debugToggle.addEventListener("click", () => {
  const expanded = els.debugToggle.getAttribute("aria-expanded") !== "true";
  setCollapsible(els.debugCard, els.debugToggle, els.debugBody, expanded);
});

chrome.tabs.onActivated.addListener(() => {
  getFunctionsFromPage().catch(() => {});
});

chrome.tabs.onUpdated.addListener((_tabId, info) => {
  if (info.status === "complete") {
    getFunctionsFromPage().catch(() => {});
  }
});

(async () => {
  setCollapsible(els.configCard, els.configToggle, els.configBody, true);
  setCollapsible(els.debugCard, els.debugToggle, els.debugBody, false);
  await loadSettings();
  updateCustomProviderPanelVisibility();
  updateChatVisibility();
  await getFunctionsFromPage().catch(() => {
    renderFunctions([]);
    setStatus(t("status_init_probe_failed"), true);
  });
})();
