// content.js
// Intercept middle-clicks (auxclick with button===1) on <a> elements.
// Prevent the new tab from opening and send the URL to the background to save.
(function () {
  function handleAuxClick(e) {
    if (e.button !== 1) return; // middle mouse
    const anchor = e.target && (e.target.closest ? e.target.closest('a[href]') : null);
    if (!anchor) return;

    const href = anchor.href;
    if (!href || href.startsWith('javascript:')) return;

    // Optional: ignore modified clicks (Ctrl/Shift/Alt/Meta) if desired
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;

    // Stop the browser from opening a new tab.
    e.preventDefault();
    e.stopPropagation();

    // Save the URL via the background service worker.
    chrome.runtime.sendMessage({ type: "save-url", url: href });
  }

  // Capture phase to beat site-level handlers where possible.
  window.addEventListener("auxclick", handleAuxClick, true);

  // Fallback for some sites that don't fire auxclick properly:
  window.addEventListener("mousedown", function (e) {
    if (e.button !== 1) return;
    const anchor = e.target && (e.target.closest ? e.target.closest('a[href]') : null);
    if (!anchor) return;
    // We *don't* preventDefault on mousedown (it may interfere with drag); rely on auxclick as primary.
  }, true);
})();
