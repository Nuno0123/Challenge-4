// Here I am gathering all the elements in my html so I'm able to manipluate them through javascript 
var Quiz = document.getElementById("quiz");
var Results = document.getElementById("results");
var Score = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");
var problema = document.getElementById("questions")
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startButton");
var beginQuiz = document.getElementById("startQuiz");
var highScoreCont = document.getElementById("highScoreContainer");
var highScoreDiv = document.getElementById("high-score");
var  highScoreDisplayName = document.getElementById("highScoreNameInput");
var highScoreName = document.getElementById("name");
var endGameButton = document.getElementById("endGameButton");
var DisplayScore = document.getElementById("highScore-score");
var submitScorebutton = document.getElementById("submitScore");
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
// Here I'm gathering my questions for the quiz on my website
var Questions = [{
    question: "What does DOM stand for?",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "c"},
    {
    question: "",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "b"},
    {
    question: "",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "a"},
    {
    question: "",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "a"},
    {
    question: "",
    optionA: "answer",
    optionB: "answe",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "c"},
    {   
    question: "",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "b"},
    {
    question: "",
    optionA: "answer",
    optionB: "answer",
    optionC: "answer",
    optionD: "answer",
    correctAnswer: "b"},      
    
    ];
var finalQuestion = Questions.length;
var currentQuestion = 0;
var time = 100;
var timer;
var points = 0;
var correct;
// Created a function that'll go through our questions, options, and the correct answers.
function generateQuestion(){
    gameOver.style.display = "none";
    if (currentQuestion === finalQuestion){
        return showScore();
    } 
    var currentQuestion = Questions[currentQuestion];
    problema.innerHTML = "<p>" + currentQuestion.questions + "</p>";
    buttonA.innerHTML = currentQuestion.optionA;
    buttonB.innerHTML = currentQuestion.optionB;
    buttonC.innerHTML = currentQuestion.optionC;
    buttonD.innerHTML = currentQuestion.optionD;
};
// Here we have the start quiz function which will also controls the timer on the screen, make the "startButton" go away after being clicked. Then it'll display our first question
function startQuiz(){
    gameOver.style.display = "none";
    beginQuiz.style.display = "none";
    generateQuestion();

    timer = setInterval(function() {
        time--;
        quizTimer.textContent = "Remaining Time" + time;

        if(time === 0) {
           clearInterval(timer);
           showScore();
        }
    }, 1000);
   Quiz.style.display = "block";
}
// Here we have the score being showcased on our website after the quiz has been completed or times runs out 
function showScore(){
    Quiz.style.display = "none";
    gameOver.style.display = "flex";
    clearInterval(timer);
    highScoreDisplayName.value = "";
    Score.innerHTML = "You got" + Score + " out of" + Questions.length + " correct!";
}
//Once the submitScoreButton is clicked here it'll save the users highscore in the local storage along with display any previous users highscore 
submitScorebutton.addEventListener("click", function highscore(){

        
    if(highScoreDisplayName.value === "") {
        alert("Name cannot be blank");
        return false;
    }else{
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighsScores")) || [];
        var currentUser = highScoreDisplayName.value.trim();
        var currentHighScore = {
            name : currentUser,
            Score : Score
        };
    
        gameOver.style.display = "none";
        highScoreCont.style.display = "flex";
        highScoreDiv.style.display = "block";
        endGameButton.style.display = "flex";
    
        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores)); 
        generateHighScores();
    }  

});

// Here this function will be for generating a new list in the local storage on the webpage 
function generateHighScores(){
    highScoreDisplayName.innerHTML = "";
    DisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highScoreDisplayName.appendChild(newNameSpan);
        DisplayScore.appendChild(newScoreSpan);
         

    }
}
// This function here shows the high score page while making all other content disappear on the webpage   
function showHighScore(){
    startQuiz.style.display = "none";
    gameOver.style.display = "none";
    highScoreCont.style.display = "flex";
    highScoreDiv.style.display = "block";
    endGameButton.style.display = "flex";

    generateHighScores();
}
// This is function is creating a replay button so the quiz can start again
function replay(){
    highScoreCont = "none";
    gameOver.style.display = "none";
    startQuiz.style.display = "flex";
    time = 100;
    points = 0;
    currentQuestion = 0;
}

// This function checks answer the user chooses
function checkAnswer(answer){
    correct = Questions[currentQuestion].correctAnswer;

    if (answer === correct && currentQuestion !== finalQuestion){
        Score++;
        alert("That Is Correct!");
        currentQuestion++;
        generateQuestion();
       
    }else if (answer !== correct && currentQuestion !== finalQuestion){
        alert("That Is Incorrect.")
        currentQuestion++;
        generateQuestion();
        
    }else{
        showScore();
    }
}


startQuizButton.addEventListeners("click",startQuiz);
