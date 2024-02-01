let t1 = gsap.timeline()
t1.from("#main>h1",{
    y:100,
    stagger:0.6,
    opacity:0,
    delay:0.5,
    duration:0.7
})
t1.from(".img-container img",{
   scale:1,
   opacity:0,
   stagger:0.4,
   duration:0.8
})
t1.from("#tech-box i , #tech-box h4",{
   scale:2,
   opacity:0,
   stagger:0.4,
   duration:0.8,
//    delay:0.4
})
