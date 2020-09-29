var timeEl = document.getElementById("timer");
var questionEL = document.getElementById("question");
var answerDiv = document.getElementById("answers");

var secondsLeft = 76;

function setTime() {
    secondsLeft = 76;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {


}

setTime();