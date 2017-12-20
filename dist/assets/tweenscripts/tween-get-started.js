var tl = new TimelineMax();
tl.from('#left_block', 2, { opacity: 0, scale: 0, x: '-800px', ease: Power4.easeInOut, delay: .03 })
    .from('#right_block', 2, { opacity: 0, scale: 0, x: '800px', ease: Power4.easeInOut, delay: .03 }, '-=2')
    .from('#bottom_block', 2, { opacity: 0 }, '-=0.5');
