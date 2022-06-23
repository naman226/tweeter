$(document).ready(function () {
  $("#tweet-text").keyup(function (event) {
    $("#count").val(function (index, value) {
      if (value < 0) {
        $("#count").css("color", "red");
      } else {
        $("#count").css("color", "black");
      }
      if (event.keyCode === 8) { //Keycode 8 for backspace
        if (value >= 140) {
          return 140;
        } else {
          return parseInt(value) + 1;
        }
      }
      return value - 1;
    });
  });
});
