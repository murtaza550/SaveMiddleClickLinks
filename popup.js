// popup.js
const countEl = document.getElementById('count');
const downloadBtn = document.getElementById('download');
const clearBtn = document.getElementById('clear');
const copyBtn = document.getElementById('copy');
const exportArea = document.getElementById('exportArea');

function update() {
  chrome.storage.local.get({ savedUrls: [] }, ({ savedUrls }) => {
    countEl.textContent = String(savedUrls.length);
    exportArea.value = savedUrls.join('\n'); // correct new line separation
  });
}

downloadBtn.addEventListener('click', async () => {
  chrome.storage.local.get({ savedUrls: [] }, async ({ savedUrls }) => {
    const text = savedUrls.join('\n');  // FIXED: use "\n", not "\\n"
    const blob = new Blob([text], { type: 'text/plain' });
    const objectUrl = URL.createObjectURL(blob);
    chrome.downloads.download({
      url: objectUrl,
      filename: 'saved_links.txt',
      saveAs: true
    });
  });
});

copyBtn.addEventListener('click', async () => {
  chrome.storage.local.get({ savedUrls: [] }, async ({ savedUrls }) => {
    const text = savedUrls.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy to clipboard"), 1200);
    } catch (e) {
      exportArea.style.display = 'block';
      exportArea.select();
      document.execCommand('copy');
    }
  });
});

clearBtn.addEventListener('click', () => {
  chrome.storage.local.set({ savedUrls: [] }, () => {
    chrome.action.setBadgeText({ text: "" });
    update();
  });
});

update();
