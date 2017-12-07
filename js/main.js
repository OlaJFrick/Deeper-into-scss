$(() => {
    
  scrollMagicScene();
});

function scrollMagicScene() {
  var controller = new ScrollMagic.Controller();

  // Version 1

  var tween1 = TweenMax.fromTo(
    ".scroll-animate-1",
    1,
    { opacity: 0, scale: 0.99 },
    { opacity: 1, scale: 1 }
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    offset: 100 // start scene after scrolling for 100px
  })
    .setTween(tween1)
    .addTo(controller);

  // Version 1

  // var controller = new ScrollMagic.Controller();

  var tween2 = TweenMax.fromTo(
    ".scroll-animate-2",
    1,
    { scale: 1.02 },
    { scale: 1 }
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    offset: 100 // start scene after scrolling for 100px
  })
    .setTween(tween2)
    .addTo(controller);
}
