chrome.browserAction.onClicked.addListener(function (tab) {
  if (isYouTubeWatchPage(tab.url)) {
    console.log("On a YouTube watch page. Redirecting...");
    chrome.tabs.update(tab.id, { url: modifyYouTubeURL(tab.url) });
  } else {
    console.log("Not on a YouTube watch page.");
    // Show a badge with a "no entry" symbol
    chrome.browserAction.setBadgeText({ text: "🚫" });

    // Set the badge background color to white
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] }); // Red background

    // Clear the badge after a few seconds (adjust as needed)
    setTimeout(function () {
      chrome.browserAction.setBadgeText({ text: "" });
    }, 3000);
  }
});

function isYouTubeWatchPage(url) {
  return /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=/.test(url);
}

function modifyYouTubeURL(url) {
  // Replace "watch?v=" with "embed/"
  return url.replace(/youtube\.com\/watch\?v=/, "youtube.com/embed/");
}
