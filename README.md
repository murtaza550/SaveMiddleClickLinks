# Save Middle-Click Links

A browser extension that intercepts middle-clicks on links, saving the URL to a list instead of opening it in a new tab. You can view and download your saved links at any time.

## Features

- **Capture Links**: Middle-click on any link, and its URL is automatically saved.
- **Prevent New Tabs**: Stops the default behavior of middle-clicks opening new tabs, keeping your browsing session clean.
- **View Saved Links**: Click on the extension icon to see a popup with all your saved URLs.
- **Download List**: Download your list of captured links as a `.txt` file with a single click.
- **Clear List**: Easily clear the entire list of links from the popup.

## Installation

To install this extension, you can load it as an unpacked extension in a Chromium-based browser (like Chrome, Edge, or Brave).

1.  **Download the code:**
    *   Clone this repository: `git clone https://github.com/murtaza550/SaveMiddleClickLinks.git`
    *   Or download the ZIP and extract it.

2.  **Load the extension in your browser:**
    *   Navigate to `chrome://extensions` (or the equivalent extensions page in your browser).
    *   Enable **"Developer mode"** (usually a toggle in the top-right corner).
    *   Click on the **"Load unpacked"** button.
    *   Select the folder where you cloned or extracted the repository.

The extension icon should now appear in your browser's toolbar.

## How to Use

1.  **Save a Link**: Find any hyperlink on a webpage and **middle-click** it. The link's URL will be added to your saved list.
2.  **View Links**: Click the "Save Middle-Click Links" extension icon in your toolbar. A popup will appear showing all the URLs you've saved.
3.  **Download or Clear**:
    *   Click the **"Download Links"** button in the popup to save all the URLs to a `links.txt` file.
    *   Click the **"Clear Links"** button to permanently delete all saved URLs.

## Files

-   `manifest.json`: Defines the extension's properties, permissions, and scripts.
-   `background.js`: The service worker that handles storage logic.
-   `content.js`: Injected into webpages to capture the middle-click events.
-   `popup.html`: The HTML structure for the extension's popup.
-   `popup.js`: The logic for the popup, including displaying links and handling button clicks.
