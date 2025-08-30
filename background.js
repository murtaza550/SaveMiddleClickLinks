// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get({ savedUrls: [] }, (data) => {
    // Ensure the key exists
    chrome.storage.local.set({ savedUrls: data.savedUrls });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.type === "save-url" && typeof message.url === "string") {
    chrome.storage.local.get({ savedUrls: [] }, (data) => {
      const set = new Set(data.savedUrls);
      set.add(message.url);
      const updated = Array.from(set);
      chrome.storage.local.set({ savedUrls: updated }, () => {
        // Optional: show a subtle badge with count
        chrome.action.setBadgeText({ text: String(updated.length) });
        chrome.action.setBadgeBackgroundColor({ color: "#555" });
      });
    });
    sendResponse({ ok: true });
  }
  // Return true if you plan to send an async response.
  return false;
});
