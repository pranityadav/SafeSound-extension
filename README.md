🎧 SafeSound – Chrome Extension

SafeSound keeps your online video & audio playback at a safe listening level by automatically capping the volume.
No more sudden ear-shattering jumps while watching YouTube, Shorts, or any other media site.

⸻

🌟 Features
	•	🔊 Automatic Volume Capping → Prevents media from going above a safe threshold (default: 50%).
	•	🎥 YouTube & Beyond → Works on YouTube, Shorts, and most video/audio sites.
	•	⚡ Real-time Monitoring → Adjusts volume instantly if it goes too high.
	•	📝 Activity Logging → Keeps track of when SafeSound adjusts your volume.
	•	🎨 Simple Popup UI → Quick toggle & view logs from the extension popup.

⸻
Demo:
<img width="318" height="202" alt="Screenshot 2025-08-24 at 5 22 14 PM" src="https://github.com/user-attachments/assets/4d5fe4c0-b21a-4060-b409-07208caa42f1" />

<img width="349" height="353" alt="Screenshot 2025-08-24 at 5 22 33 PM" src="https://github.com/user-attachments/assets/8200ec04-cb72-40c7-b0ca-ddf06fa93255" />




⸻

🚀 Installation (Developer Mode)
	1.	Clone this repository:

    git clone https://github.com/YOUR-USERNAME/SafeSound.git
    cd SafeSound


	2.	Open Chrome and go to:
      chrome://extensions/
	3.	Enable Developer Mode (toggle at top-right).
	4.	Click Load unpacked → Select your SafeSound folder.
	5.	Done ✅ The SafeSound icon will appear in your Chrome toolbar.

⸻

🛠️ Tech Stack
	•	Manifest V3 Chrome Extension
	•	JavaScript (content scripts + background service worker)
	•	HTML/CSS for popup UI
	•	Chrome Storage API for logs

⸻

📂 Project Structure

SafeSound/
│── manifest.json        # Extension manifest (v3)
│── background.js        # Service worker
│── content.js           # Injected script for volume capping
│── popup.html           # Extension popup UI
│── popup.js             # Popup logic
│── icons/               # Extension icons
│── README.md            # This file


⸻

⚡ Roadmap / Future Improvements
	•	Allow user to set their own safe volume threshold
	•	Add site-specific volume settings
	•	Sync logs across devices via Google account
	•	Option to temporarily disable SafeSound on selected sites

⸻

🤝 Contributing

Pull requests are welcome!
If you’d like to improve SafeSound, fork the repo and submit a PR.

⸻

📜 License

This project is licensed under the MIT License – feel free to use and modify.

⸻

✨ Made with care to protect your ears 🎧

⸻
