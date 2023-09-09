// Declare Element
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var circle = document.querySelector(".circle");

//Update Function
var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

var progressBarWidth = progressBar.clientWidth; //Calculate With of Progress Bar
var isDrag = false; //Flag Technique
var initialClientX; //Giá trị ban đầu ở Client X
var initialValue = 0; //Giá trị ban đầu
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
  }
});

circle.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    // console.log(moveWidth);
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;
    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }
    handleUpdateValue(value);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initialValue = value;
});

//Build Music Play
var audio = document.querySelector(".audio");
var durationTime = progressBar.nextElementSibling;
var currentTime = progressBar.previousElementSibling;
var playButton = document.querySelector(".play-btn");
var pauseIconHTML = `<i class="fa-solid fa-pause"></i>`;
var playIconHTML = `<i class="fa-solid fa-play"></i>`;

var getTime = function (second) {
  var minute = Math.floor(second / 60);
  second -= minute * 60;
  second = Math.floor(second);
  return `${minute < 10 ? `0${minute}` : minute}:${
    second < 10 ? `0${second}` : second
  }`;
};

//Listen Event Music Loaded
audio.addEventListener("loadeddata", function () {
  durationTime.innerText = getTime(audio.duration);
});

playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIconHTML;
  } else {
    audio.pause();
    this.innerHTML = playIconHTML;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTime.innerText = getTime(audio.currentTime);

  //Lấy tỉ lệ phần teawm dựa vào CurrentTime và Duration
  var value = (audio.currentTime * 100) / audio.duration;
  handleUpdateValue(value);
});
