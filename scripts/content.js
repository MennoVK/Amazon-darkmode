html = document.documentElement;

html.classList.add("darkMode-enabled");

window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

browser.storage.local.get(["amazonDarkModeEnabled"]).then((result) => {
  if (result.amazonDarkModeEnabled === undefined) {
    browser.storage.local.set({ amazonDarkModeEnabled: true });
  } else if (!result["amazonDarkModeEnabled"]) {
    html.classList.remove("darkMode-enabled");
  }
});
