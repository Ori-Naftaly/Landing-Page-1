const circle = document.getElementById('circle')
const upBtn = document.getElementById('upBtn')
const downnBtn = document.getElementById('downBtn')

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.addEventListener("click", flipdown) 

function flipdown() {
    rotateSum = rotateValue + "rotate(-90deg)"
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.addEventListener("click", flipup) 

function flipup() {
    rotateSum = rotateValue + "rotate(+90deg)"
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }