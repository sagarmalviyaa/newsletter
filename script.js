const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline()

tl.to("#load",{
    y:"100vh",
    scale:0.4,
    duration:0
})

tl.to("#load",{
    y:"-60vh",
    duration:1,
    delay:1
})

tl.to("#load",{
    y:"0vh",
    rotate:720,
    scale:1,
    duration:1.5,
    delay:1
})





