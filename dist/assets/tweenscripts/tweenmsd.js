var tl = new TimelineMax();
tl.from('.fa-laptop', 1.2, { opacity: 0, x: -500, y: -500, scale: 15 })
    .from('.fa-wordpress', 1.2, { opacity: 0, x: 0, y: -500, scale: 15 }, '-=0.7')
    .from('.fa-shopping-cart', 1.2, { opacity: 0, x: 300, y: -500, scale: 15 }, '-=0.7');

$(function() {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
        }
    });
    new ScrollMagic.Scene({
            triggerElement: "#parallax1"
        })
        .setTween("#parallax1 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#parallax2"
        })
        .setTween("#parallax2 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#parallax3"
        })
        .setTween("#parallax3 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);
});
