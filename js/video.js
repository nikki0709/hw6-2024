var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
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
	video.playbackRate /= 0.9;
});

// Speed up video
document.querySelector("#faster").addEventListener("click", function () {
	console.log("New speed is " + video.playbackRate);
	video.playbackRate *= 0.9;
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