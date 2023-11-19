chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.update(tab.id, { url: modifyYouTubeURL(tab.url) });
});

function modifyYouTubeURL(url) {
  // Replace "watch?v=" with "embed/"
  return url.replace(/youtube\.com\/watch\?v=/, "youtube.com/embed/");
}
