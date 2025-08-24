function renderVolumeLog() {
  const logUl = document.getElementById("volumeLog");
  logUl.innerHTML = "";

  chrome.storage.local.get({ volumeLog: [] }, (data) => {
    data.volumeLog.forEach((entry) => {
      const li = document.createElement("li");
      li.innerText = entry;
      logUl.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderVolumeLog);
