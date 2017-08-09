$(document).ready(function(){
  introScreen();
});

function introScreen() {

  /// Helper functions
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
  };

  function typeNext(selector, typed, toType, callback) {
    if (toType.length == 0) {
      callback();
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
      typeNext(selector, typed, toType, callback);
    }, 200);
  };

  function afterAnimation() {
    var navBar = $('.nav-bar');
    navBar.slideDown();
    unlockTop();
  }

  function lockToTop() {
    $('body').scrollTop(0);
    $('body').css('overflow', 'hidden');
  }

  function unlockTop() {
      $('body').css('overflow', '');
  }
  /// End Helper functions
  var introText = 'Hi, I\'m Jared.';

  lockToTop();
  blink('.intro-text > .caret', 0, 1, function(){
    typeNext('.intro-text > .intro-message', '', introText, function() {
      blink('.intro-text > .caret');
      afterAnimation();
    });
  });
};
