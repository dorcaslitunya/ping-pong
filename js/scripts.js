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

//image slider

var imageSlider = document.getElementById('heady');

var images = ["url('img/1.jpg')", "url('img/2.jpg')", "url('img/3.jpg')", "url('img/4.jpg')"];


  var counter = 0;

function carousel() {
  imageSlider.style.backgroundImage = images[counter];

  counter++;


  if (counter > 3) {
    counter = 0;
  }
  console.log("dorcas")
}
setInterval(carousel, 3000)
