toggle = document.getElementById("toggle");

const restorePopup = async () => {
  const result = await chrome.storage.local.get("amazonDarkModeEnabled")
  if(result.amazonDarkModeEnabled != undefined){
    toggle.checked = result.amazonDarkModeEnabled;
  }
}

const storeDarkmode = (e) => {
  chrome.storage.local.set({ amazonDarkModeEnabled: e.target.checked })
}

const setDarkmode = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].url?.startsWith("chrome://")) return;
    chrome.scripting.executeScript(
      {
          target: { tabId: tabs[0].id },
          files: ["scripts/content.js"],
      },
      () => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: () => {
                  toggleDarkmode();
              },
          });
      }
  );
  });
}

const toggleInput = (e) => {
  storeDarkmode(e)
  setDarkmode()
}

restorePopup()
toggle.addEventListener("change", toggleInput)