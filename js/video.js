var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to ", video.autoplay);
	console.log("Loop is set to ", video.loop);
});

// Play video
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

// Pause video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Slow down video
document.querySelector("#slower").addEventListener("click", function () {
	console.log("New speed is " + video.playbackRate);
	video.playbackRate *= 0.9;
});

// Speed up video
document.querySelector("#faster").addEventListener("click", function () {
	console.log("New speed is " + video.playbackRate);
	video.playbackRate /= 0.9;
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip ahead");
	video.currentTime += 10;
	console.log("Current location " + video.currentTime);
	if (video.currentTime > - video.duration) {
		video.currentTime = 0;
		console.log("Vedio Current Time is " + video.currentTime);
	}
});

// Mute video
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false; // Unmute
		this.textContent = "Mute"; // Update button text
	} else {
		video.muted = true; // Mute
		this.textContent = "Unmute"; // Update button text
	}
	console.log("Muted:", video.muted);
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	console.log("Volume set to:", video.volume);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Added oldSchool styling");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Removed oldSchool styling");
});