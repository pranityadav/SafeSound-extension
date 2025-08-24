(() => {
  console.log("✅ SafeSound content script running");

  const MAX_SAFE_VOLUME = 0.2; // 20%

  function enforceSafeVolume(video) {
    if (!video) return;

    // set once at start
    if (video.volume > MAX_SAFE_VOLUME) {
      video.volume = MAX_SAFE_VOLUME;
      console.log("🔊 Volume capped to 20%");
    }

    // listen to any changes
    video.addEventListener("volumechange", () => {
      if (video.volume > MAX_SAFE_VOLUME) {
        video.volume = MAX_SAFE_VOLUME;
        console.log("🔄 Reset volume back to 20%");
      }
    });
  }

  function scanForVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach(enforceSafeVolume);
  }

  // observe DOM changes for YouTube SPA navigation
  const observer = new MutationObserver(scanForVideos);
  observer.observe(document.body, { childList: true, subtree: true });

  // run once on load
  scanForVideos();
})();
