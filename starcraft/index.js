var hp = 3;

$("#drone").click(() => {
  $("#spit").fadeIn();
  $("#spit").animate({
    left: "+=250",
  });
  $("#spit").fadeOut(() => {
    hp = hp - 1;
    $("#hp").text("HP : " + hp);
  });
  $("#spit").css({ left: " 150px" });
  if (hp === 0) {
    $("#bunker").fadeOut();
  }
});
