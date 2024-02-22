var num = 6;
var randomNumber1 = Math.random() * num;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".box1 .dice").src = "images-dice/dice" + randomNumber1 + ".png"


var randomNumber2 = Math.random() * num;
randomNumber2 = Math.floor(randomNumber2) + 1;
document.querySelector(".box2 .dice").src = "images-dice/dice" + randomNumber2 + ".png"

if (randomNumber1 === randomNumber2) {
  document.querySelector(".message").innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".message").innerHTML = "🚩 Player1 wins"
} else {
  document.querySelector(".message").innerHTML = "Player2 wins 🚩"
}