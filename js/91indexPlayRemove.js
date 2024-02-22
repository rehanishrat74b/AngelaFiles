$(".box").on("click", (event) => {

  var audio_file = "wrong.mp3";
  var boxid;
  switch (event.target.getAttribute("class")) {
    case "box green":
      // code block      
      var audio_file = "green.mp3";
      boxid = "green";

      break;
    case "box red":
      // code block
      var audio_file = "red.mp3";
      boxid = "red"
      break;
    case "box yellow":
      var audio_file = "yellow.mp3";
      //event.target.setAttribute("class", "box yellow pressed");
      boxid = "yellow"
      // code block
      break;
    case "box blue":
      var audio_file = "blue.mp3";
      boxid = "blue";
      // code block
      break;

    default:
      // code block
      var audio_file = "wrong.mp3";
  }

  var audio = new Audio('sounds-simmon/' + audio_file);
  audio.play();

  $("." + boxid).addClass("pressed");

  setTimeout(function () {
    $("." + boxid).removeClass("pressed");
  }, 100);

})

