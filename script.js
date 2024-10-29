function inet(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  }
  
  inet();
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: "#button #btn1",
      prevEl: "#button #btn2",
    },

  });

 
gsap.to("#loader #im3",{
    y:22,
    yoyo:true,
    repeat:-1,
    duration:"0.5"
  })
gsap.to("#page1 #nav #mid #mi2",{
  rotate:"23deg",
  transform:"translate(0%)",
  duration:1,
  repeat:-1,
  yoyo:true
})
var tl = gsap.timeline()
tl

.to("#loader",{
  marginTop:"-48%",
  duration:"1.5",
  delay:2,
},"anim")
.from("#page1 #container #nav #right",{
  y:200 ,
  delay:2.3,
},"anim")
.from("#page1 #container #nav #left",{
  y:200 ,
  delay:2.3,

},"anim")

.from("#page1 #container #lefty",{
  y:200, 
  delay:2.3,

},"anim")
.from("#page1 #container  #righty",{
  y:200, 
  delay:2.3,

},"anim")
.from("#page1 #container  #nav #mid",{
  y:180, 
  delay:2.2,

},"anim")


var tl2  = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1 #container",
    // markers:true,
    start:"top 98%",
    end:"top 50%",
    scrub:2
  }
  
});
tl2
.to("#page1 #container #nav #right,#page1 #container #nav #left",{
  y:-180,  
},"anim")
.to("#page1 #container #righty,#page1 #container #lefty",{
  y:-180,  
},"anim")
.to("#page1 #container #nav #mid",{
  y:-100,  
},"anim")

var tl3 = gsap.timeline(
  {
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page1 #container",
      // markers:true,
      start:"top 98%",
      end:"top -5%",
      scrub:2
    }
  }
)
tl3
.to("#page2 #let1,#let2,#let4,#let6,#let8,#let9,#let10",{
  y:-70
},"anim")
.to("#page2 #top",{
  height:"10vh",
},"anim")
.to("#page2 #let3,#let7,#let5",{
  y:-240
},"anim")

var tl4 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    // markers:true,
    start:"top 180%",
    end:"top 30%",
    scrub:2
  }
});
tl4
.to("#page3 #oneside,#otherside",{
  y:-500,
},"anim")
.to("#page3 #nav",{
  y:-150,
},"anim")
.to("#page3 #centre",{
  y:-280,
},"anim")


var tl4 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    // markers:true,
    start:"top 190%",
    end:"top 60%",
    scrub:2
  }
})
tl4
.to("#page4 #mt1,#mt3,#mt5,#mt9,#mt8",{
  y:-290,
},"anim")
.to("#page4 #mt2,#mt7,#mt4,#mt6",{
  y:-70,
},"anim")
.to("#page4 #nav",{
  y:-260,
},"anim")
.to("#page4 #image #sentre",{
  y:-390,
},"anim")
.to("#page4 #right, #page4 #lefty",{
  y:-590,
},"anim")

var tl5 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page5",
    // markers:true,
    start:"top 200%",
    end:"top 60%",
    scrub:2
  }
})
tl5
.to("#page5 #box1 ",{
  y:-50,
},"anime")
.to("#page5 #box1 #anime",{
transform:"translateX(15%)",
},"anime")

.to("#page5 #box2 ",{
  y:-90,
},"anime")
.to("#page5 #box2 #anime2",{
transform:"translateX(-15%)",
},"anime")
.to("#page5 #box3 ",{
  y:-190,
},"anime")
.to("#page5 #box3 #anime3",{
transform:"translateX(15%)",
},"anime")

gsap.to("#page3 #centre #balon1",{
  repeat:-1,
  yoyo:true,
  transform:"translate(-50%) rotate(5deg)",
  duration:1
})
gsap.to("#page3 #centre #balon2",{
  repeat:-1,
  yoyo:true,
  transform:"translate(-50%) rotate(30deg)",
  duration:1.5
})
gsap.to("#page3 #centre #balon3",{
  repeat:-1,
  yoyo:true,
  transform:"translate(-50%) rotate(-32deg)",
  duration:1.5
})
gsap.to("#page3 #centre #descrip",{
  repeat:-1,
  yoyo:true,
  transform:"translate(0%) rotate(-5deg)",
  duration:1.5
})

