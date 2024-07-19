(() => {
  const html = document.documentElement;

  const toggleDarkmode = async () => {
    const result = await chrome.storage.local.get("amazonDarkModeEnabled")
    if (result.amazonDarkModeEnabled === undefined) {
      chrome.storage.local.set({ amazonDarkModeEnabled: true });
      html.classList.add("darkMode-enabled");
  } 
    if (result.amazonDarkModeEnabled){
      html.classList.add("darkMode-enabled");
    }
    if (!result.amazonDarkModeEnabled) {
      html.classList.remove("darkMode-enabled");
    }
  }
  
  toggleDarkmode()
})()