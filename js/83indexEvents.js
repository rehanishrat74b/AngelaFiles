$(document).ready(function () {
  $("h1").text("WellCome. click me");
  $("button").html("<em>Click Me</em>");


  $("a").attr("href", "http://www.google.com");
  alert("src is " + $("a").attr("href"));



  $("h1").on("click", function () {
    alert("Handler for `click` called.");
    $("h1").css("color", "red");
  });

  $("input").on("keypress", function (event) {
    console.log("keypress=" + event.key);
    $("h1").text(event.key);
  })
});