"use strict";

const videoEl = document.createElement("video");
videoEl.setAttribute("src", "rabbit320.mp4");
videoEl.style.width = "100%";

const containerEl = document.querySelector(".video-container");
containerEl.appendChild(videoEl);

const controlsEl = document.createElement("div");
controlsEl.classList.add("video-controls");

const playEl = document.createElement("div");
playEl.classList.add("buttton", "play");
const pauseEl = document.createElement("div");
pauseEl.classList.add("button", "pause");

playEl.addEventListener("click", function (e) {
  videoEl.play();
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
});

controlsEl.appendChild(playEl);
controlsEl.appendChild(pauseEl);

containerEl.appendChild(controlsEl);

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");
rangeEl.addEventListener("change", function (e) {
  console.log(e.target.value);
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});
videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

videoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});
volumeEl.addEventListener("change", function (e) {
  videoEl.volume = e.target.value / 100;
});

containerEl.appendChild(volumeEl);
containerEl.appendChild(rangeEl);
containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
