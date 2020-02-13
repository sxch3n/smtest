var controller = new ScrollMagic.Controller();

// // section wipes(natural)
// // // get all slides
// // var slides = document.querySelectorAll("section.panel");

// // // create scene for every slide
// // for (var i = 0; i < slides.length; i++) {
// //     new ScrollMagic.Scene({
// //         triggerElement: slides[i],
// //         triggerHook:'onLeave',
// //         duration:'100%'
// //     })
// //         .setPin(slides[i], { pushFollowers: false })
// //         .addIndicators() // add indicators (requires plugin)
// //         .addTo(controller);
// // }

// section wipes(manual)
var wipeAnimation = gsap
    .timeline()
    .fromTo(
        "div.panel#page2",
        { x: "-100%" },
        { x: "-50%", ease: Linear.easeNone }
    ) // in from left
    .fromTo(
        "div.panel#page2",
        { x: "-50%" },
        { x: "-100%", ease: Linear.easeNone }
    )
    .fromTo(
        "div.panel#page3",
        { x: "100%" },
        { x: "50%", ease: Linear.easeNone }
    ); // in from right

new ScrollMagic.Scene({
    triggerElement: "#pin-container",
    triggerHook: "onLeave",
    duration: "600%"
})
    .setPin("#pin-container")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);

// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: "onLeave",
//         duration: "200%" // this works just fine with duration 0 as well
//         // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//         // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//     }
// });

// // get all slides
// var slides = document.querySelectorAll("div.panel");

// // create scene for every slide
// for (var i = 0; i < slides.length; i++) {
//     new ScrollMagic.Scene({
//         triggerElement: slides[i]
//     })
//         .setPin(slides[i], { pushFollowers: false })
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// }
