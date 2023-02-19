var points = 0

function startQuiz() {
    var container = document.getElementById("div1");
    removeAllChildNodes(container)
    var btn = document.createElement("button")
    var newContent = document.createTextNode("placeholder answer")
    btn.appendChild(newContent);
    btn.addEventListener("click")

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function secondQuestion() {
    
    var newContent = 
}

function thirdQuestion() {

}

function rightAnswer() {
    points += 1     
}

function wrongAnswer() {
    points += 0
} 

function onload() {
    var btn = document.createElement("button");
    var newContent = document.createTextNode("Start Quiz");
    btn.appendChild(newContent);
    btn.addEventListener("click", startQuiz);
    var container = document.getElementById("div1");
    container.appendChild(btn);

}
document.addEventListener("DOMContentLoaded", onload)



//   // Function to change the content of t2
// //function modifyText() {
//     const t2 = document.getElementById("t2");
//     const isNodeThree = t2.firstChild.nodeValue === "three";
//     if (isNodeThree) {
//         t2.firstChild.nodeValue =  "two";
//     } else {
//         t2.firstChild.nodeValue =  "three";
//     }
//   }
  
//   // Add event listener to table
//   const el = document.getElementById("outside");
//   //el.addEventListener("click", modifyText, false);
  