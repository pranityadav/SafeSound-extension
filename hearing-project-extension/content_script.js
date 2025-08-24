// content.js
function logVolumeAction(message) {
  chrome.storage.local.get({ volumeLog: [] }, (data) => {
    const log = data.volumeLog;
    log.unshift(`${new Date().toLocaleTimeString()} - ${message}`);
    chrome.storage.local.set({ volumeLog: log.slice(0, 10) });
  });
}

function monitorAudioElements() {
  const mediaElements = document.querySelectorAll("audio, video");

  mediaElements.forEach((el) => {
    el.addEventListener("volumechange", () => {
      if (el.volume > 0.5) {
        el.volume = 0.5;
        logVolumeAction(`🔊 Volume capped on ${window.location.hostname}`);
      }
    });

    // Initial check
    if (el.volume > 0.5) {
      el.volume = 0.5;
      logVolumeAction(`🔊 Volume capped on ${window.location.hostname}`);
    }
  });
}

// Keep monitoring new elements (YouTube loads videos dynamically)
const observer = new MutationObserver(monitorAudioElements);
observer.observe(document.body, { childList: true, subtree: true });

// Run immediately on load
monitorAudioElements();
