$(document).ready(function(){
  introScreen();
  createButtons();
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
    setTimeout(function(){
      $('body').scrollTop(0);
      $('body').css('overflow', 'hidden');
    }, 5);
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

function createButtons() {
  function navItemsListen() {
    $('.nav-items > .nav-item').click(function(){
      console.log('lcick');
      var scrollTo = '.section#' + $(this).data('scroll-to');
      console.log(scrollTo);
      var offset = $(scrollTo).offset().top - 50;
      console.log(offset);
      $('html, body').animate({
        scrollTop: offset
      }, 1000);
    })
  };

  function navBrandListen() {
    $('.nav-brand').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  };

  function navbarMenuListen() {
    $('.menu-button').click(function(){
      if ($('.nav-items').is(':visible')) {
        $('.nav-items').slideUp();
      } else {
        $('.nav-items').slideDown();
        $('.nav-items').css('display', 'flex');
      };
    });
  };
  navbarMenuListen();
  navItemsListen();
  navBrandListen();
};
