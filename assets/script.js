// Here I am gathering all the elements in my html so I'm able to manipluate them through javascript 
var Quiz = document.getElementById("quiz");
var Results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");
var problema = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startButton");
var beginQuiz = document.getElementById("startQuiz");
var highscoreCon = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-score");
var highscorename = document.getElementById("name");
var highscoreDisplayName = document.getElementById("highScoreNameInput");
var endGameButton = document.getElementById("endGameButton");
var submitScoreButton = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highScore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Here I'm gathering my questions for the quiz on my website
var Questions = [{
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "b"},
  {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "a"},
   {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "a"},
    {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "c"},
    {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "a"},  
    {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "c"},
    {
    question: "?",
    optionA: "Answer",
    optionB: "Answer",
    optionC: "Answer",
    optionD: "Answer",
    correctAnswer: "b"},
        
    
    ];

var finalQuestion = Questions.length;
var currentQuizQuestion = 0;
var time = 100;
var timer;
var points = 0;
var correct;
// Created a function that'll go through our questions, options, and the correct answers.
function generateQuizQuestion(){
    gameOver.style.display = "none";
    if (currentQuizQuestion === finalQuestion){
        return showScore();
    } 
    var currentQuestion = Questions[currentQuizQuestion];
    problema.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.optionA;
    buttonB.innerHTML = currentQuestion.optionB;
    buttonC.innerHTML = currentQuestion.optionC;
    buttonD.innerHTML = currentQuestion.optionD;
};

// Here we have the start quiz function which will also controls the timer on the screen, make the "startButton" go away after being clicked. Then it'll display our first question
function startQuiz(){
    gameOver.style.display = "none";
    beginQuiz.style.display = "none";
    generateQuizQuestion();

    
    timer = setInterval(function() {
        time--;
        quizTimer.textContent = "Time left: " + time;
    
        if(time === 0) {
          clearInterval(timer);
          showScore();
        }
      }, 1000);
    Quiz.style.display = "block";
}
// Here we have the score being showcased on our website after the quiz has been completed or times runs out
function showScore(){
    Quiz.style.display = "none"
    gameOver.style.display = "flex";
    clearInterval(timer);
    highscorename.value = "";
    finalScore.innerHTML = "You got " + points + " out of " + Questions.length + " correct!";
}

//Once the submitScoreButton is clicked here it'll save the users highscore in the local storage along with display any previous users highscore 
submitScoreButton.addEventListener("click", function highscore(){
    
    
    if(highscorename.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscorename.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : points
        };
    
        gameOver.style.display = "none";
        highscoreCon.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameButton.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// Here this function will be for generating a new list in the local storage on the webpage 
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function here shows the high score page while making all other content disappear on the webpage
function showHighscore(){
    beginQuiz.style.display = "none"
    gameOver.style.display = "none";
    highscoreCon.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameButton.style.display = "flex";

    generateHighscores();
}

function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// This is function is creating a replay button so the quiz can start again
function replayQuiz(){
    highscoreCon.style.display = "none";
    gameOver.style.display = "none";
    beginQuiz.style.display = "flex";
    time = 100;
    points = 0;
    currentQuizQuestion = 0;
}

// This function checks answer the user chooses
function checkAnswer(answer){
    correct = Questions[currentQuizQuestion].correctAnswer;

    if (answer === correct && currentQuizQuestion !== finalQuestion){
        points++;
        alert("That Is Correct!");
        currentQuizQuestion++;
        generateQuizQuestion();
    
}else if (answer !== correct && currentQuizQuestion !== finalQuestion){
        alert("That Is Incorrect.")
        currentQuizQuestion++;
        generateQuizQuestion();
        
    }else{
        showScore();
    }
}


startQuizButton.addEventListener("click",startQuiz);