const MAX_SAFE_VOLUME = 0.2; // 20%

function capVolume(video) {
  if (video.volume > MAX_SAFE_VOLUME) {
    video.volume = MAX_SAFE_VOLUME;
    console.log("🔊 SafeSound: Volume capped at", MAX_SAFE_VOLUME * 100, "%");
  }
}

function hookVideo(video) {
  if (video.dataset.safeSoundHooked) return; // don’t double-hook
  video.dataset.safeSoundHooked = "true";

  capVolume(video);
  video.addEventListener("volumechange", () => capVolume(video));

  console.log("✅ SafeSound hooked video", video);
}

function scanVideos() {
  const videos = document.querySelectorAll("video");
  videos.forEach(hookVideo);
}

// Run immediately
scanVideos();

// Watch for SPA navigation or new <video> tags
const observer = new MutationObserver(scanVideos);
observer.observe(document.body, { childList: true, subtree: true });
