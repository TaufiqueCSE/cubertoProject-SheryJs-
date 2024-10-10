Shery.mouseFollower();
Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.hoverWithMediaCircle(".hvr", {
    videos: ["images/1.mp4", "images/3.mp4", "images/2.mp4"] ,
});

gsap.to(".f-l-elem",{
    scrollTrigger:{
        trigger:"#featured-images",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
    },
    y:"-300%",
    ease:Power1,
})

let sections = document.querySelectorAll(".f-l-elem");

Shery.imageEffect(".imagess", {
    style: 3,
    // config: {onMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start:"top top",
                scrub:1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                }
            })
        })
    },
});