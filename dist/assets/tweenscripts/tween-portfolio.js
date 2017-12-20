var tl = new TimelineMax();
tl.from('#cf', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut })
.from('#zamow', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#tele', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#w-e', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#cmheat', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#prepaid', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#rmjrc', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#cyber', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#wwcc', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25')
.from('#insider', .5, { transform: 'rotateY(90deg)', ease: Power1.easeOut }, '-=0.25');