//--------------Global variable Declarations
var timeEl = document.getElementById("timer");
var questionEL = document.getElementById("question");
var titleEl = document.getElementById("title");

var answerDiv = document.getElementById("answers");

var beginBtn = document.getElementById("beginBtn");
var questionNum = 0;

//array of objects for each question
var questions = [
    {
        question: "Which of the following is not a commonly used data type?",
        answers: ["Boolean", "String", "While", "Integer"],
        correctAnswer: 3
    },
    {
        question: "Question 2",
        answers: ["Boolean", "String", "While", "Integer"],
        correctAnswer: 0
    },
    {
        question: "Question 3",
        answers: ["Boolean", "String", "While", "Integer"],
        correctAnswer: 0
    },
    {
        question: "Question 4",
        answers: ["Boolean", "String", "While", "Integer"],
        correctAnswer: 0
    },
    {
        question: "Question 5",
        answers: ["Boolean", "String", "While", "Integer"],
        correctAnswer: 0
    }
]



//----------------Event Listeners
// click event listener for the button that begins the test
beginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    beginBtn.remove();
    titleEl.textContent = "";
    setTime();
    setUpTest();
})

// event listener for the answer buttons
document.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.id === "answer") {
        nextQuestion();
    }
})

//-----------------Functions
// timer for test
function setTime() {
    var secondsLeft = 75;
    timeEl.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

// runs the test
function setUpTest() {
    questionNum = 0;

    for (let i = 0; i < 4; i++) {
        var btn = document.createElement("button");
        btn.id = i + 1;
        btn.setAttribute("id", "answer");
        answerDiv.appendChild(btn);
    }
    // questionEL.textContent = questions[questionNum-1].question;
    nextQuestion();
}

function nextQuestion() {

    if (questionNum === 5) {
        finishTest();
    } else {
        questionNum++;

        questionEL.textContent = questions[questionNum - 1].question;

        for (let i = 0; i < 4; i++) {
            answerDiv.children[i].textContent = questions[questionNum - 1].answers[i];
        }
    }

}




