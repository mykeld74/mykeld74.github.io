var tl = new TimelineMax();

tl.from('#logo', 2, {
        rotation: -360,
        y: 300,
        scale: 2.2,
        ease: Bounce.easeOut
    }, '+=1.5')
    .from('header', 2, {
        backgroundColor:'#dedede',
        ease: Power3.easeOut
    },'-=1.5')
    .from('#msSwitchOverlay', 2, {
        backgroundColor: 'rgba(222, 222, 222, 1)',
        ease: Power3.easeOut
    }, '-=1.5')
    .to('#msSwitch', 0, {
        backgroundImage:'url(./assets/img/caution_switch-on.png)',
        ease: Power3.easeOut
    }, '+=0.1')
    .from('.main-text', 1,{
        opacity: 0,
        ease:Power3.easeOut
    }, '+=0.1'
);