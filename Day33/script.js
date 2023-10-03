var input = document.getElementById("input-area");
var output = document.getElementById("output-area");

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB";
recognition.start();

recognition.onresult = function (event) {
  let transcript = event.results[0][0].transcript;
  input.innerHTML = event.results[0][0].transcript;
  if (transcript == "hello") {
    output.innerHTML = "Hello, User!";
  } else if (transcript.includes("weather")) {
    window.open("https://www.google.com/search?q=weather");
  } else {
    output.innerHTML = "I don't know what you mean.";
  }
};
