$(document).ready(function(){
  animateIntroMessage();
});

function animateIntroMessage() {
  // Get text
  var introText = 'Hi, I\'m Jared.';

  function blink(selector, currBlink, maxBlink, callback) {
    $(selector).fadeOut(500, function() {
      $(this).fadeIn(500, function() {
        if (currBlink != undefined && maxBlink != undefined && currBlink >= maxBlink) {
          if (callback) {
            callback();
          }
        } else {
          blink(selector, currBlink + 1, maxBlink, callback);
        }
      });
    });
  }
  function typeNext(selector, typed, toType) {
    if (toType.length == 0) {
      blink('.intro-text > .caret', 0, 10);
      return;
    }
    if (toType[0] == ' ') {
      typed += '&nbsp;';
    } else {
      typed += toType[0];
    }
    toType = toType.substring(1);
    $(selector).html(typed);
    setTimeout(function(){
      typeNext(selector, typed, toType);
    }, 200);
  }
  blink('.intro-text > .caret', 0, 1, function(){
    typeNext('.intro-text > .intro-message', '', introText);
  });
};
