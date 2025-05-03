let elem = document.querySelector(".elem-h1");
let page2 = document.querySelector("#page2");
let page1 = document.querySelector("#page1"); 
gsap.from(elem,{
    x:-200,
    y:300,
    scale:0,
    scrub:true,
})

function locomotiveScroll(){
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
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    }
    // Ends Here//
    locomotiveScroll();

//page2.addEventListener("mouseenter",function(e){
//    page2video.style.opacity="9";
//})
let cursor = document.querySelector("#cursor");
page2.addEventListener("mousemove",function(e){
    //cursor.style.left=e.x+"px";
    //cursor.style.top=e.y+"px";
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        scrub:true,
        scale:1,
    })
})
page2.addEventListener("mouseleave",function(e){
  //cursor.style.left=e.x+"px";
  //cursor.style.top=e.y+"px";
  gsap.to(cursor,{
      x:e.x,
      y:e.y,
      scrub:true,
      scale:0,
  })
});
function page3Effects(){
let video3 = document.querySelector("#video3");
let page3Content3 = document.querySelector("#page3-content3-container");
let page3Content3Elem = document.querySelector("#page3-h1Elem");
page3Content3.addEventListener("mousemove",(e)=>{
  //page3-content3-video.style.opacity=
  //alert("working")
   gsap.to(video3,{
    x:e.x,
    y:e.y,
    scrub:true,
    opacity:1,
    //scrub:true,
   });
   gsap.to(page3Content3Elem,{
    x:e.x,
    y:120,
    scrub:true,
   })    
})
page3Content3.addEventListener("mouseenter",(e)=>{
  //page3-content3-video.style.opacity=
  //alert("working")
   gsap.to(video3,{
    x:e.x,
    y:e.y,
    duration:1,
    scale:1,
    //opacity:0,
    //scrub:true,
   }) 
   gsap.fromTo(video3, 
    { opacity: 0 }, // Initial state
    { opacity: 1, duration: 2, delay: 1 } // Fade in after 1 second delay
  );
   //gsap.from(video3,{
   //  x:-10,
   //  y:-10,
   // //scale:1,
   // //opacity:0,
   // scrub:true,
   //})    
})
page3Content3.addEventListener("mouseleave",function(e){
  //page3-content3-video.style.opacity=
  //alert("working")
   gsap.to(video3,{
    x:e.x,
    y:e.y,
    scale:0,
    //opacity:0,
    scrub:true,
   })    
})
}
page3Effects();


function page4Effects(){
let divImgVideo1 = document.querySelector("#imgVideo1");
let page4Video1 = document.querySelector("#page4Video1");
let divImgVideo2 = document.querySelector("#imgVideo2");
let page4Video2 = document.querySelector("#page4Video2");
divImgVideo1.addEventListener("mouseenter",function(e){
 // alert("working");
 // console.log("entered video1")
 gsap.to(page4Video1,{
 // x:e.x,
 scale:1,
 opacity:1,
  //x:e.x,
  y:e.y,
 })
   //page4Video1.style.opacity="1";
 //gsap.fromTo(page4Video1, 
 //// { opacity: 0 }, // Initial state
 //// { opacity: 1, duration: 2, delay: 1 } // Fade in after 1 second delay
//);
 
});
divImgVideo1.addEventListener("mousemove",function(e){
  gsap.to(page4Video1,{
  //  x:e.x,
    y:e.y,
  })
});
divImgVideo1.addEventListener("mouseleave",function(e){
  // page4Video1.style.display="none";
 gsap.to(page4Video1,{
   scale:0,
   opacity:0,
 });
});
divImgVideo2.addEventListener("mouseenter",function(e){
  // alert("working");
   gsap.to(page4Video2,{
    //x:e.x,
    scale:1,
   // x:e.x,
    y:e.y,
    opacity:1,
   })
   //page4Video2.style.opacity="1";
  // console.log("entered video1")
  //gsap.fromTo(page4Video2, 
  // //{ opacity: 0 }, // Initial state
  // { opacity: 1}
    // delay: 1 } // Fade in after 1 second delay
 //);
 });
 divImgVideo2.addEventListener("mousemove",function(e){
  //alert("mouse entered")
  //console.log(e.clientX);
  gsap.to(page4Video2,{
   //x:e.x,
    y:e.y,
  })
});
divImgVideo2.addEventListener("mouseleave",function(e){
  gsap.to(page4Video2,{
        scale:0,
        opacity:0,
  });
});

 
// ChatGpt Code

// For divImgVideo1
/*divImgVideo1.addEventListener("mouseenter", function(e) {
  gsap.to(page4Video1, {
    opacity: 1, // Set opacity to 1 when entering
    scale: 1, // Ensure the video is visible and not scaled down
    y: e.y,  // Move video to the mouse's vertical position
  });
});

divImgVideo1.addEventListener("mousemove", function(e) {
  gsap.to(page4Video1, {
    y: e.y,  // Update the video position on mouse move
  });
});

divImgVideo1.addEventListener("mouseleave", function(e) {
  gsap.to(page4Video1, {
    scale: 0,   // Scale down the video
    opacity: 0, // Fade out the video
  });
});

// For divImgVideo2
divImgVideo2.addEventListener("mouseenter", function(e) {
  gsap.to(page4Video2, {
    opacity: 1,  // Set opacity to 1 when entering
    scale: 1,    // Ensure the video is visible
    y: e.y,      // Move video to the mouse's vertical position
  });
});

divImgVideo2.addEventListener("mousemove", function(e) {
  gsap.to(page4Video2, {
    y: e.y,  // Update the video position on mouse move
  });
});

divImgVideo2.addEventListener("mouseleave", function(e) {
  gsap.to(page4Video2, {
    scale: 0,   // Scale down the video
    opacity: 0, // Fade out the video
  });
});*/

}
page4Effects();

function page5Effects() {
  let swiperWrapper = document.querySelector("#page5SwiperElements");
  let swiperSlide2 = document.querySelector("#swiperslide2");
  let swiperWrape = document.querySelector(".swiper-wrapper");
  let percent = document.querySelector("#percent");
  let number = 122;
  percent.innerHTML="100%";
  let animationFrameId;
  /*swiperWrapper.addEventListener("mouseenter",function(e){
   //  gsap.from(swiperWrape,{
   //     x:-10,
   //     y:-10
   //  });
   //  gsap.to(swiperWrape,{
   // // x:100,
   // x:10,
   //  y:10,
   //  })
   gsap.fromTo(swiperWrapper, {
    x: -10,  // start from left
    y: 100,   // start from bottom
  }, {
    x: 0,    // move to original position
    y: 0,    // move to original position
    duration: 0.3,  // Duration of the animation
  });
  })*/
  swiperslide2.addEventListener("mouseenter",function(e){
  /*for(let i=0;i<150;i++){  
  number = i;
  percent.innerHTML=number+"%";
  }*/
 //let num = 10;

 if (animationFrameId) cancelAnimationFrame(animationFrameId);

  // Animation to increase the number
  function incrementNumber() {
    if (number < 150) {
      number++;
      percent.innerHTML = number + "%";
      animationFrameId = requestAnimationFrame(incrementNumber); // Continue animation
    }
  }
  
  incrementNumber(); // Start incrementing when mouse enters
   gsap.to(percent,{
    opacity:1,
    //scale:1,
    y:-10,
    duration:1,
   })

  })




 //window.incremental = setInterval(()=>{
 //if(number < 150){
 //  number++;
 //  percent.innerHTML=number+"%";
//}// else{
 //    clearInterval(window.incremental);
//
 //},30)
 /*if (window.incrementInterval) clearInterval(window.incrementInterval);
  
 // Use setInterval to increment the number every 10ms
 window.incrementInterval = setInterval(() => {
   if (number < 150) {
     number++;
     percent.innerHTML = number + "%";
   } else {
     clearInterval(window.incrementInterval); // Stop once it reaches 150
   }
 }, 80)*/


// ChaTgpt Code Start From Here
//let number = 128;
//percent.innerHTML = "100%";
//let animationFrameId;

//swiperSlide2.addEventListener("mouseenter", function(e) {
//  // Cancel any ongoing animation
//  gsap.to(percent, {
//    opacity: 1,
//    // Optionally add duration for fade-in
//  });
//});




// ChatGPT Code Ends Here
  /*  gsap.to(percent,{
      opacity:1,
      scale:1,
      y:-20,
      x:-50
      //duration:2,
    })
  });*/
  swiperslide2.addEventListener("mouseleave",function(e){


    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // Animation to decrease the number
    function decrementNumber() {
      if (number > 122) {
        number--;
        percent.innerHTML = number + "%";
        animationFrameId = requestAnimationFrame(decrementNumber); // Continue animation
      }
    }
    
    decrementNumber(); // Start decrementing when mouse leaves
  
    gsap.to(percent,{
      opacity:0,
      y:10,
      //scale:0,
      duration:1,
    })
  });
  let videoEffectPage5LastElement = document.querySelector(".VideoEffectPage5-LastElement");
  /*videoEffectPage5LastElement.addEventListener("mouseenter",function(e){
    gsap.to("#page5LastElemVideo", {
      scale: 1.1,
      duration: 1, // Time to scale to 1.1
    });
    
    gsap.to("#page5LastElemVideo", {
      scale: 1.2,
      duration: 1, // Time to scale to 1.2
      delay: 1, // Wait for previous animation to complete
    });
  
    gsap.to("#page5LastElemVideo", {
      scale: 1.3,
      duration: 1, // Time to scale to 1.3
      delay: 1, // Wait for previous animation to complete
    });
  });*/
  document.addEventListener("keydown",function(e){
    switch(e.key){
      case "ArrowUp":
      //  alert("ArrowUped")
    gsap.to("#page5LastElemVideo",{
        scale:1,
        stagger:0.1,
        duration:3,
       // opacity:0,
    });
    break;
    case "ArrowDown":
     //alert("ArrowDown")
      gsap.to("#page5LastElemVideo", {
        scale: 1.3,
        stagger:0.1,
        duration: 3, // Time to scale to 1.1
      });
      break;
      default:
        break;
  }
  });
  let headingEffectPage5Last = document.querySelector(".h2EffectPage5LastElement");
  headingEffectPage5Last.addEventListener("mouseenter",function(){
    gsap.to(GetKnow,{
      stagger:0.3,
      duration:0.3,
      opacity:0,
      onComplete:function(){
        GetKnow.innerHTML="About Us";
      gsap.to(GetKnow,{
        duration:0.4,
        opacity:1,
      })
      }
    })
});
headingEffectPage5Last.addEventListener("mouseleave", function() {
  gsap.to(GetKnow,{
    stagger:0.3,
    duration:0.3,
    opacity:0,
    onComplete:function(){
    GetKnow.innerHTML="Get Know Us";
    gsap.to(GetKnow,{
      duration:0.4,
      opacity:1,
    })
    }
  }) 
});
}
page5Effects();


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /*autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },*/
});
var tl = gsap.timeline();
tl.from("#loader h3",{
  x:40,
opacity:0,
duration:1,
stagger:0.3,
});
tl.to("#loader h3",{
  opacity:0,
  duration:1,
  stagger:0.3,
   x:-40,
});
tl.to("#loader",{
  opacity:0,
});
tl.to("#loader",{
  display:"none",
});
tl.from("#page1-center-content h1 span",{
  x:100,
  opacity:0,
  stagger:0.3,
});

// Initialize a flag to check if the animation has run
let animationHasRun = false;

// Get the element
const swiperElement = document.querySelector(".mySwiper");

// Set up the mouseenter event
swiperElement.addEventListener("mouseenter", () => {
  if (!animationHasRun) {
    const tl = gsap.timeline();
    tl.from(".mySwiper", {
      x: -100,
      opacity: 0,
      y: 300,
      duration: 1,
      //stagger: 0.3,
    });
    tl.to(".mySwiper",{
      opacity:1,
    })
    /*tl.to(".mySwiper",{
      x:100,
      y:-300,
    })*/

    // Set the flag to true so the animation won't run again
    animationHasRun = true;
  }
});

let animate = false;
const Footer = document.querySelector("#Footer");

// Set up the mouseenter event
Footer.addEventListener("mouseenter", () => {
  //alert("Working")
  if (!animate) {
    const tr = gsap.timeline();
    tr.from("#footer-Heading h1 span", {
      stagger:0.3,
      opacity:0,
      duration:1,
      //stagger: 0.3,
    });
    /*tl.to(".mySwiper",{
      x:100,
      y:-300,
    })*/

    // Set the flag to true so the animation won't run again
    animate = true;
  }
});