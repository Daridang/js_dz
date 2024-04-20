"use strict";

const VideoEl = document.createElement("video");
VideoEl.setAttribute("src", "rabbit320.mp4");

const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(VideoEl);

const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
playEl.classList.add("play");
pauseEl.classList.add("pause");

playEl.addEventListener("click", function (e) {
  VideoEl.play();
  console.log(VideoEl.duration, VideoEl.currentTime);
});
pauseEl.addEventListener("click", function (e) {
  VideoEl.pause();
  console.log(VideoEl.duration, VideoEl.currentTime);
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");
rangeEl.addEventListener("change", function (e) {
  console.log(e.target.value);
  VideoEl.currentTime = (e.target.value / 100) * VideoEl.duration;
});
VideoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((VideoEl.currentTime / VideoEl.duration) * 100)
  );
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

VideoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", VideoEl.volume * 100);
});
volumeEl.addEventListener("change", function (e) {
  VideoEl.volume = e.target.value / 100;
  console.log(VideoEl.volume);
});

containerEl.appendChild(volumeEl);
containerEl.appendChild(rangeEl);
containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
