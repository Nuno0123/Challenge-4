function onload (){
    var btn = document.createElement("button")
    var container = document.getElementById("div1")
    console.log(container)

    container.appendChild(btn)

}
document.addEventListener("DOMContentLoaded", onload)

// console.log(window.onload)



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
  