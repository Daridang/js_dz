"use strict";

const videoEl = document.createElement("video");
videoEl.setAttribute("src", "rabbit320.mp4");
videoEl.style.width = "100%";

const containerEl = document.querySelector(".video-container");
containerEl.appendChild(videoEl);

const controlsEl = document.createElement("div");
controlsEl.classList.add("video-controls");

const playEl = document.createElement("div");
playEl.classList.add("button", "play");
const pauseEl = document.createElement("div");
pauseEl.classList.add("button", "pause");

playEl.addEventListener("click", function () {
  videoEl.play();
});
pauseEl.addEventListener("click", function () {
  videoEl.pause();
});

const rangeEl = document.createElement("input");
rangeEl.type = "range";
rangeEl.min = "0";
rangeEl.max = "100";
rangeEl.value = "0";

videoEl.addEventListener("timeupdate", () => {
  const percentage = (videoEl.currentTime / videoEl.duration) * 100;
  rangeEl.value = Math.round(percentage);
});

rangeEl.addEventListener("input", (e) => {
  const seekTime = (e.target.value / 100) * videoEl.duration;
  videoEl.currentTime = seekTime;
});

const volumeEl = document.createElement("input");
volumeEl.type = "range";
volumeEl.min = "0";
volumeEl.max = "100";
volumeEl.value = videoEl.volume * 100;

volumeEl.addEventListener("input", (e) => {
  videoEl.volume = e.target.value / 100;
});

controlsEl.appendChild(playEl);
controlsEl.appendChild(pauseEl);
controlsEl.appendChild(volumeEl);
controlsEl.appendChild(rangeEl);

containerEl.appendChild(controlsEl);

videoEl.addEventListener("loadedmetadata", () => {
  volumeEl.value = videoEl.volume * 100;
  rangeEl.value = (videoEl.currentTime / videoEl.duration) * 100;
});
