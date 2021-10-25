//get HTML Elements
var startButton = document.getElementById("button-start");
var time = document.getElementById("time");
var startPage = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var submitButton = document.getElementById("submit-button");
var submitPage = document.getElementById("final-score");
var quizQuestionsOne = document.getElementById("question1");
var quizQuestionsTwo = document.getElementById("question2");
var quizQuestionsThree = document.getElementById("question3");
var quizQuestionsFour = document.getElementById("question4");
var quizQuestionsFive = document.getElementById("question5");
var highScores = document.getElementById("score-page");
var quizPoints = 0;
var count = 60;
var startOver = document.getElementById("go-back-button");


//what happens when you click the start button
startButton.addEventListener('click', function () {
    // decrease the timer by 1 after button is clicked

    setInterval(function () {
        if (count > 0) {
            count -= 1;
            time.textContent = count;
        }
        if (count <= 0) {
            clearInterval(time);
            quizQuestionsOne.style.display = "none";
            quizQuestionsTwo.style.display = "none";
            quizQuestionsThree.style.display = "none";
            quizQuestionsFour.style.display = "none";
            quizQuestionsFive.style.display = "none";
            submitPage.style.display = "block";
        }

    }, 1000);
    // displays only the first question when button is clicked
    startPage.style.display = "none";
    quizQuestionsOne.style.display = "block";
}
)

quizQuestionsOne.addEventListener('click', function (event) {
    var selectedButton = event.target.innerHTML;
    console.log(selectedButton);
    var wrongAnswerOne = document.getElementById("#button0-1");
    console.log(wrongAnswerOne);
    var wrongAnswerTwo = document.getElementById("#button0-2");
    console.log(wrongAnswerTwo);
    var correctAnswer = document.getElementById("#button0-3");
    console.log(correctAnswer);
    function addQuizPoints() {
        if (selectedButton === "Rita Script") {
            console.log(quizPoints);
            count -= 10;
            time.textContent = count;
        }
        else if (selectedButton === "Cuppa Java") {
            console.log(quizPoints);
            count -= 10;
            time.textContent = count;
        }
        else if (selectedButton === "Brendan Eich") {
            quizPoints += 1;
            console.log(quizPoints);
        }
    }
    addQuizPoints();
    quizQuestionsOne.style.display = "none";
    quizQuestionsTwo.style.display = "block";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "none";
})

//when an answer is chosen, told if it was wrong or write, the next page comes up, and score is logged

quizQuestionsTwo.addEventListener('click', function (event) {
    var selectedButton = event.target.innerHTML;
    console.log(selectedButton);
    var wrongAnswerOne = document.getElementById("#button1-1");
    console.log(wrongAnswerOne);
    var correctAnswer = document.getElementById("#button1-2");
    console.log(correctAnswer);
    var wrongAnswerTwo = document.getElementById("#button1-3");
    console.log(wrongAnswerTwo);
    function addQuizPoints() {
        if (selectedButton === "global variable") {
            console.log(quizPoints);
            count -= 10;
            time.textContent = count;
        }
        else if (selectedButton === "local variable") {
            quizPoints += 1;
            console.log(quizPoints);
        }
        else if (selectedButton === "both of the above") {
            count -= 10;
            time.textContent = count;
            console.log(quizPoints);
        }
    }
    addQuizPoints();
    quizQuestionsOne.style.display = "none";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "block";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "none";
}
)
quizQuestionsThree.addEventListener('click', function (event) {
    var selectedButton = event.target.innerHTML;
    console.log(selectedButton);
    var correctAnswer = document.getElementById("#button2-1");
    console.log(correctAnswer);
    var wrongAnswerOne = document.getElementById("#button2-2");
    console.log(wrongAnswerOne);
    var wrongAnswerTwo = document.getElementById("#button2-3");
    console.log(wrongAnswerTwo);
    function addQuizPoints() {
        if (selectedButton === "Images") {
            quizPoints += 1;
            console.log(quizPoints);
        }
        else if (selectedButton === "Punctuation") {
            console.log(quizPoints);
            count -= 10;
            time.textContent = count;
        }
        else if (selectedButton === "Spaces") {
            count -= 10;
            time.textContent = count;
            console.log(quizPoints);
        }
    }
    addQuizPoints();
    quizQuestionsFour.style.display = "none";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "block";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "none";
})

quizQuestionsFour.addEventListener('click', function (event) {
    var selectedButton = event.target.innerHTML;
    console.log(selectedButton);
    var wrongAnswerOne = document.getElementById("#button3-1");
    console.log(wrongAnswerOne);
    var correctAnswer = document.getElementById("#button3-2");
    console.log(correctAnswer);
    var wrongAnswerTwo = document.getElementById("#button3-3");
    console.log(wrongAnswerTwo);
    function addQuizPoints() {
        if (selectedButton === "To add length to a variable") {
            count -= 10;
            time.textContent = count;
            console.log(quizPoints);
        }
        else if (selectedButton === "To determine the length of a string") {
            quizPoints += 1;
            console.log(quizPoints);
        }
        else if (selectedButton === "To make your webpage longer") {
            count -= 10;
            time.textContent = count;
            console.log(quizPoints);
        }
    }
    addQuizPoints();
    quizQuestionsOne.style.display = "none";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "block";
    submitPage.style.display = "none";
})

quizQuestionsFive.addEventListener('click', function (event) {
    var selectedButton = event.target.innerHTML;
    console.log(selectedButton);
    var wrongAnswerOne = document.getElementById("#button4-1");
    console.log(wrongAnswerOne);
    var wrongAnswerTwo = document.getElementById("#button4-2");
    console.log(wrongAnswerTwo);
    var correctAnswer = document.getElementById("#button4-3");
    console.log(correctAnswer);
    function addQuizPoints() {
        if (selectedButton === "True") {
            console.log(quizPoints);
            count -= 10;
            time.textContent = count;
        }
        else if (selectedButton === "False") {
            count -= 10;
            time.textContent = count;
            console.log(quizPoints);
        }
        else if (selectedButton === "Both") {
            quizPoints += 1;
            console.log(quizPoints);
        }
    }
    addQuizPoints();
    quizQuestionsOne.style.display = "none";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "block";
    clearInterval(count);
    count = null;
    var totalScore = document.getElementById("total-score");
    totalScore.textContent = quizPoints;
})

submitButton.addEventListener('click', function () {
    var storeInitials = document.getElementById("initials").value;
    console.log(storeInitials);
    quizQuestionsOne.style.display = "none";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "none";
    highScores.style.display = "block";
    count = 60;
    var scoreList = document.getElementById("list-of-scores");
    scoreList.textContent = (storeInitials + "---" + quizPoints);
})

startOver.addEventListener('click', function () {
    quizQuestionsOne.style.display = "block";
    quizQuestionsTwo.style.display = "none";
    quizQuestionsThree.style.display = "none";
    quizQuestionsFour.style.display = "none";
    quizQuestionsFive.style.display = "none";
    submitPage.style.display = "none";
    highScores.style.display = "none";
    count = 60;
})

 //time for loop startButton.addEventListener('click', function () {
//     setInterval(function () {



//Click the button to show results


