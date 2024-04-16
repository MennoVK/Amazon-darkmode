toggle = document.getElementById("toggle");

window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

browser.storage.local.get(["amazonDarkModeEnabled"]).then((result) => {
  toggle.checked = result["amazonDarkModeEnabled"];
});

toggle.addEventListener("change", function (e) {
  browser.storage.local.set({ amazonDarkModeEnabled: e.target.checked }, () => {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/content.js"],
      });
    });
  });
});
