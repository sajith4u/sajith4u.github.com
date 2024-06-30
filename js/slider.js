$(function() {

  var passes = ['pass1', 'pass2', 'pass3'];
  var index = 0;
  var reel = $('#reel');

  var incrementIndex = function() {
    index++, index > passes.length - 1 && (index = 0);
  }

  var createSlide = function(index) {
    var $div = $("<div>", {
      class: "screenshot " + passes[index]
    });

    reel.append($div);
  };

  var transitionSlides = function(duration, delay) {
    var a = $(".screenshot");
    $("#reel").transition({
      translate: [-287],
      duration: duration,
      delay: delay,
      easing: "easeInOutCubic",
      complete: function() {
        $("#reel").transition({
          translate: [0],
          duration: 0,
          complete: function() {
            $('.screenshot').first().remove();
            initiateSlides(500, 2000);
          }
        });
      }
    });
  }

  var initiateSlides = function(duration, delay) {
    incrementIndex();
    createSlide(index);
    transitionSlides(duration, delay);
  }

  createSlide(index);
  initiateSlides(500, 2000);

});