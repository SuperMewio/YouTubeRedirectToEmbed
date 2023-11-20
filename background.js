chrome.browserAction.onClicked.addListener(function (tab) {
  if (!isYouTubeWatchPage(tab.url)) {
    // Show a badge with a "no entry" symbol
    chrome.browserAction.setBadgeText({ text: "🚫" });

    // Set the badge background color to green
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 0] }); // [R, G, B, A]

    // Clear the badge after a few seconds (adjust as needed)
    setTimeout(function () {
      chrome.browserAction.setBadgeText({ text: "" });
    }, 3000);
  }
});

function isYouTubeWatchPage(url) {
  return /youtube\.com\/watch\?v=/.test(url);
}
