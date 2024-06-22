function locoAndScrollInitialize()
{
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locoAndScrollInitialize();


// ----------------------------------------------------------------------------------------------------section1--------------------------------------------------------------------------------


  gsap.from("#section1 #overlay",{
    // y:150,
    height:0,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5
  })

  gsap.from("#section1 #box1",{
    x:-70,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:Cubic.easeOut,
    duration:1,
    delay:1
  })

  gsap.from("#section1 #box2",{
    x:70,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:Cubic.easeOut,
    duration:1,
    delay:1
  })

  gsap.from("#section1 h2",{
    y:-100,
    opacity:0,
    // ease:Expo.easeInOut,
    // ease:Cubic.easeOut,
    ease:TimelineLite.to,

    duration:.8,
    delay:1.7,
  })

  gsap.from("#section1 #line",{
    width:0,
    // opacity:0,
    // ease:Expo.easeInOut,
    duration:.4,
    delay:2.3
  })

  gsap.from("#section1 #circle",{
    // width:0,
    opacity:0,
    // ease:Expo.easeInOut,
    duration:.2,
    delay:2.8
  })

  gsap.from("#section1 h1",{
    y:120,
    opacity:0,
    // ease:Expo.easeInOut,
    // ease:Cubic.easeOut,
    ease:TimelineLite.to,
    duration:1.5,
    delay:1.7
  })

  gsap.from("#section1 #overlay a",{
    rotate:360,
    opacity:0,
    // ease:Expo.easeInOut,
    duration:1,
    delay:2.5,
  })

// ----------------------------------------------------------------------------------------------------section2--------------------------------------------------------------------------------
gsap.from("#section2 h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 h1",
        start:"top 80%",
        // markers:true
    },
    x:-90,
    opacity:0,
    ease:TimelineLite.to,
    duration:1.4,
})

gsap.from("#section2 #textdiv p",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 #textdiv p",
        start:"top 96%",
        // markers:true
    },
    x:-90,
    opacity:0,
    ease:Cubic.easeOut,
    stagger:.5,
    duration:1.4,
})

gsap.from("#section2>a",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2>a",
        start:"top 96%",
        // markers:true
    },
    rotate:180,
    opacity:0,
    // ease:Cubic.easeOut,
    ease:TimelineLite.to,

    duration:1,
    delay:1.6
})

gsap.from("#section2 #s2p2",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 #s2p2",
        start:"top 70%",
        // markers:true
    },
    // width:0,
    // marginleft:"20px",
    opacity:0,
    height:0,
    duration:2
})

// ----------------------------------------------------------------------------------------------------section3--------------------------------------------------------------------------------


gsap.from("#section3 #s3p1 ",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3p1",
        start:"top 70%",
        // markers:true
    },
    width:0,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    duration:1.4,
    delay:.3,
})

gsap.from("#section3>h1 ",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 h1",
        start:"top 70%",
        // markers:true
    },
    x:50,
    opacity:0,
    ease:TimelineLite.to,
    duration:1,
    delay:0.5
})

gsap.from("#section3>h5",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 h5",
        start:"top 80%",
        // markers:true
    },
    x:-50,
    opacity:0,
    ease:TimelineLite.to,
    duration:1,
    delay:1
})

gsap.from("#section3>a",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3p1",
        start:"top 70%",
        // markers:true
    },
    // x:50,
    rotate:180,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    duration:1,
    delay:2.5
})
// ----------------------------------------------------------

gsap.from("#section3 #s3p2 ",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3p2",
        start:"top 70%",
        // markers:true
    },
    width:0,
    // opacity:0,
    // ease:Expo.easeInOut,
    duration:1.4,
})

// ---------------------------------- for opposite animation--------------------------

// gsap.to("#section3 #s3p2 #layer",{
//   scrollTrigger:{
//       scroller:"#main",
//       trigger:"#section3 #s3p2 #layer",
//       start:"top 70%",
//       // markers:true
//   },
//   width:0,
//   // opacity:0,
//   // ease:Expo.easeInOut,
//   duration:1.4,
// })

gsap.from("#section3 #text h1 ",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #text h1",
        start:"top 80%",
        // markers:true 
    },
    x:50,
    opacity:0,
    duration:1,
    // delay:3
})

gsap.from("#section3 #text h5",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #text  h5",
        start:"top 80%",
        // markers:true
    },
    x:-50,
    opacity:0,
    duration:1,
    delay:0.5
})

gsap.from("#section3 #text a",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #text a",
        start:"top 90%",
        // markers:true
    },
    // x:50,
    rotate:180,
    opacity:0,
    // ease:Expo.easeInOut,
    duration:1,
    delay:1
})



