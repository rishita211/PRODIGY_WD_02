// script.js
let startTime, interval, elapsed = 0;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").onclick = function() {
  if (!isRunning) {
    startTime = Date.now() - elapsed;
    interval = setInterval(updateTime, 100);
    isRunning = true;
  }
};

document.getElementById("pause").onclick = function() {
  if (isRunning) {
    clearInterval(interval);
    elapsed = Date.now() - startTime;
    isRunning = false;
  }
};

document.getElementById("reset").onclick = function() {
  clearInterval(interval);
  elapsed = 0;
  isRunning = false;
  display.innerText = "00:00:00";
  laps.innerHTML = "";
};

document.getElementById("lap").onclick = function() {
  if (isRunning) {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
  }
};

function updateTime() {
  const time = Date.now() - startTime;
  const secs = Math.floor(time / 1000) % 60;
  const mins = Math.floor(time / 60000) % 60;
  const hrs = Math.floor(time / 3600000);
  display.innerText =
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs;
}
