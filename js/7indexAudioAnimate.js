var numberOfDrums = document.querySelectorAll(".drum").length
var i = 0;


for (i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", myClick);
}
function myClick() {
  var btn = this.textContent;
  play(btn);

}
function play(btn) {
  var audio_file = "tom-1.mp3";
  switch (btn) {
    case 'w':
      audio_file = "tom-1.mp3";
      break;
    case 'a':
      audio_file = "tom-2.mp3";
      break;
    case 's':
      audio_file = "tom-3.mp3";
      break;
    case 'd':
      audio_file = "tom-4.mp3";
      break;
    case 'j':
      audio_file = "crash.mp3";
      break;
    case 'k':
      audio_file = "kick-bass.mp3";
      break;
    case 'l':
      audio_file = "snare.mp3";
      break;
    default:
      audio_file = "";
      break;

  }

  if (audio_file != "") {
    var audio = new Audio('sounds/' + audio_file);
    audio.play();
    animate(btn);
  }



}

document.addEventListener("keydown", (event) => {
  play(event.key);
})

function animate(btn) {
  var button = document.querySelector("." + btn);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);

}