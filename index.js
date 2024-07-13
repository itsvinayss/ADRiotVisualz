function cursorEffect() {
    var cursor = document.querySelector("#cursor");
    
    window.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            duration: 0.2,
        });
    });
    
    document.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3, 
            ease: "power2.out"
        });
    });

    document.addEventListener("mouseleave", function(event) {
        if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,
                duration: 0.3, 
                ease: "power2.out"
            });
        }
    });
   
    var navElem = document.querySelectorAll("#nav a");
    navElem.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(cursor, {
                scale: 2.5,
                border: "1px solid #da2d36",
                backgroundColor: "transparent",
                duration: 0.3
                
            });
            gsap.to(elem, { cursor: "none" });
            gsap.to(elem,{
                scale:2,
            })
        });
        
        elem.addEventListener("mouseleave", function(){
            gsap.to(cursor, {
                scale: 1,
                border: "none",
                backgroundColor: "#da2d36",
                duration: 0.3
            });
            gsap.to(elem, { cursor: "none" });
            gsap.to(elem,{
                scale:1,
            })
        });
    });
}

// Initialize the cursor effect function
cursorEffect();

// loader();

var tl = gsap.timeline();

tl.from("#main", {
    scale:1,
    opacity:0,
    duration: 1.5,
    transformOrigin: "center center", // Ensures scaling from the center
    onComplete: function() {
        // Ensure that after scaling, the content is interactive as expected
        document.querySelector('#main').style.transform = 'none';
    }
});

tl.from("#nav img",{
    y:-70,
    duration:1,
    opacity:0
})
tl.from("#nav a", {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})

tl.from(".text span",{
    y:30,
    stagger:0.3,
    opacity:0,
    duration:1
})


// tl.from("#page1 .vertical-text", {
//     x: -100,
//     duration: 1,
//     opacity: 0
// })
gsap.from("#circle1, #circle2, #circle3", {
    duration: 2.5,
    scale:0,
    // ease: "bounce.out",
    // x: -20,
    // y: -200,
    // delay:3,
    opacity:0,
    onComplete: function() {
        startBreathingEffect();
    }
});

function startBreathingEffect() {
    gsap.to("#circle1, #circle2, #circle3", {
        scale: 1.2,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.1,
        border:" 1px solid #da2d36",
        boxShadow: "inset 0 0 30px #da2d36", // Adjust this delay if needed
    });
}

 var tl1= gsap.timeline();

 tl1.from(".vcontent #showreel", {
    scale: 0,
    duration: 1
})
.from(".vcontent", {
    scale: 0,
    duration: 1
}, "<");
tl1.from("#page1 .vertical-text", {
    x: -100,
    duration: 1,
    opacity: 0
})

gsap.to(".arrow",{
    y:100,
    duration:1,
    delay:2,
    scrollTrigger:{
    trigger:".arrow",
    scroller:"body",
    markers:"true",
     start: "top top",  // Start animation when #page1 reaches the top of the viewport
    end: "bottom top",
    scrub:"3",
    ease:"none"
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // Select the About Us link in the navigation
    const aboutLink = document.querySelector('a[href="#about-us"]');
    
    // Select the About Us section
    const aboutSection = document.getElementById("page2");

    // Add a click event listener to the About Us link
    aboutLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Scroll to the About Us section
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
document.querySelectorAll('.aTag a').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var slideIndex = this.getAttribute('data-slide');
        swiper.slideTo(slideIndex);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const clickableItems = document.querySelectorAll('.content ul li');

    clickableItems.forEach(item => {
        const anchor = item.querySelector('a');
        if (anchor) {
            item.addEventListener('click', () => {
                window.open(anchor.href, anchor.target || '_self');
            });
        }
    });
});

document.getElementById("menu-icon").onclick = function () {
  document.body.classList.add("blur-background");
  gsap.to("#sidebar", { width: "250px", duration: 0.5 });
};

document.getElementById("close-btn").onclick = function () {
  document.body.classList.remove("blur-background");
  gsap.to("#sidebar", { width: "0", duration: 0.5 });
};






































      // scrollTrigger:{
    //     trigger:"#page1 .vertical-text",
    //     scroller:"body",
    //     markers:"true",
    //     start:"top 20%",
    //     end:"bottom 30%",
    //     ease: "power.inOut",
    //      scrub:"true"

    // }



    // var navElem = document.querySelectorAll("#page1 .vertical-text");
    // navElem.forEach(function(elem){
    //     elem.addEventListener("mouseenter", function(){
    //         gsap.to("#page1 .vertical-text", {
    //             x:2,
    //             y:3,
    //             stagger:0.1,
    //             color:"#da2d36",
    //             duration: 0.3,
    //             cursor:"none"
                
    //         });
    //     });
    //     elem.addEventListener("mouseleave", function(){
    //         gsap.to("#page1 .vertical-text", {
    //             color:"white",
    //             duration: 0.3
    //         });
    //     });
    // });













// CORRECT CORRECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function loader() { 
//     document.addEventListener("DOMContentLoaded", function() {
//         const preloader = document.getElementById('preloader');
//         const mainContent = document.getElementById('main');
//         const preloaderVideo = document.getElementById('preloader-video');

//         preloaderVideo.addEventListener('ended', function() {
//             preloader.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // Add transition properties
//             preloader.style.opacity = '1';
//             preloader.style.transform = 'translateY(-100%)'; // Move preloader upwards
//             setTimeout(() => {
//                 preloader.style.display = 'none';
//                 mainContent.style.display = 'block';
//             }, 1000); // 1000ms corresponds to the transition duration
//         });
//     });  
// }
// loader();






// function loader(){
//     document.addEventListener("DOMContentLoaded", function() {
//         const preloader = document.getElementById('preloader');
//         const mainContent = document.getElementById('main');
//         const preloaderVideo = document.getElementById('preloader-video');
    
//         preloaderVideo.addEventListener('ended', function() {
//             preloader.style.opacity = '0';
//             setTimeout(() => {
//                 preloader.style.display = 'none';
//                 mainContent.style.display = 'block';
//             }, 1000); // 1000ms corresponds to the transition duration
//         });
//     });
        
// }





































































function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  