$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var display = parseInt($("input#number").val());
    var result = answer(display);
    $(".result").text(result);

  });
});

// business logic
var answer = function(display) {
  for (i = 1; i <= display; i++) {
    if (i % 15 === 0) {
      $(".result").append("<li>" + "pingpong" + "</li>");
    }
    else if (i%3===0) {
      $(".result").append("<li>" + "ping" + "</li>");

    }
    else if (i%5 ===0) {
        $(".result").append("<li>" + "pong" + "</li>");

    }
    else{
        $(".result").append("<li>" + i + "</li>");
    }
  }
}
