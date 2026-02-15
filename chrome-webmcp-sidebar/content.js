const PAGE_SOURCE = "WEBMCP_PAGE";
const EXT_SOURCE = "WEBMCP_EXTENSION";

let latestFunctions = [];
const pending = new Map();

function injectBridge() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("injected.js");
  script.async = false;
  (document.head || document.documentElement).appendChild(script);
  script.remove();
}

injectBridge();

window.addEventListener("message", (event) => {
  if (event.source !== window || !event.data || event.data.source !== PAGE_SOURCE) return;
  const msg = event.data;

  if (msg.type === "WEBMCP_FUNCTIONS_UPDATE") {
    latestFunctions = Array.isArray(msg.functions) ? msg.functions : [];
    return;
  }

  if (msg.type === "WEBMCP_EXECUTE_RESULT") {
    const resolver = pending.get(msg.id);
    if (!resolver) return;
    pending.delete(msg.id);
    if (msg.ok) resolver.resolve(msg.result);
    else resolver.reject(new Error(msg.error || "Unknown execution error"));
  }
});

function executeFunction(name, args) {
  return new Promise((resolve, reject) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    pending.set(id, { resolve, reject });
    window.postMessage(
      {
        source: EXT_SOURCE,
        type: "WEBMCP_EXECUTE_REQUEST",
        id,
        name,
        args
      },
      "*"
    );

    setTimeout(() => {
      if (!pending.has(id)) return;
      pending.delete(id);
      reject(new Error(`Execution timeout for ${name}`));
    }, 15000);
  });
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message || typeof message !== "object") return;

  if (message.type === "GET_WEBMCP_FUNCTIONS") {
    sendResponse({ ok: true, functions: latestFunctions });
    return true;
  }

  if (message.type === "EXECUTE_WEBMCP_FUNCTION") {
    executeFunction(message.name, message.args || {})
      .then((result) => sendResponse({ ok: true, result }))
      .catch((err) => sendResponse({ ok: false, error: String(err.message || err) }));
    return true;
  }
});
