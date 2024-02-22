$("button").on("click", function () {

  $("h1").css("color", "purple");

  if ($(this).attr("id") == "b2") {
    $(this).text("got it");
    $("h1").hide();
  }
  if ($(this).attr("id") == "b1") {
    $("h1").show();
    //$("h1").toggle();
  }

});


/*$("h1").fadeIn();
$("h1").fadeOut();
$("h1").fadeToggle()

$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();

$("h1").animate({ opacity: 0.5 });
$("h1").animate({ margin: "20%" });
$("h1").slideUp().slideDown().animate({ opacity: 0.5 });*/
