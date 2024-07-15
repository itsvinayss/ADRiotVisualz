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
cursorEffect();


function NavanchorTagFunctionality(){
    
   document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const homeLink = document.querySelector('a[href="#"]'); // Assuming this is the "Home" link

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetID = this.getAttribute('href').substring(1);

            const idMap = {
                'home':'page1',
                'about-us': 'page2',
                'commercials': 'page4',
                'services': 'page5',
                'clients': 'page6',
                'contact': 'page7'
            };

            const targetSectionID = idMap[targetID] || targetID;
            const targetSection = document.getElementById(targetSectionID);

            if (targetSection) {
                if (targetID === '') { // Handle "Home" link
                    scrollToTop();
                } else {
                    scrollToSection(targetSection);
                }
            }
        });
    });

    function scrollToTop() {
        const startPosition = window.pageYOffset;
        const distance = 0 - startPosition;
        const duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    function scrollToSection(section) {
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});

}
NavanchorTagFunctionality();
   

function sidebarFuntionality(){
        
    document.getElementById("menu-icon").onclick = function () {
        document.body.classList.add("blur-background");
        gsap.to("#sidebar", { width: "250px", duration: 0.5 });
      };
      
      document.getElementById("close-btn").onclick = function () {
        document.body.classList.remove("blur-background");
        gsap.to("#sidebar", { width: "0", duration: 0.5 });
      };
      
      
      document.addEventListener("DOMContentLoaded", function() {
          const sidebarLinks = document.querySelectorAll('#sidebar a');
          const closeBtn = document.getElementById('close-btn');
      
          sidebarLinks.forEach(link => {
              link.addEventListener('click', function(event) {
                  event.preventDefault();
                  const targetID = this.getAttribute('href').substring(1);
                  const idMap = {
                        'home':'page1',
                      'about-us': 'page2',
                      'commercials': 'page4',
                      'services': 'page5',
                      'clients': 'page6',
                      'contact': 'page7'
                  };
                  const targetSectionID = idMap[targetID] || targetID;
                  const targetSection = document.getElementById(targetSectionID);
                  
                  if (targetSection) {
                      // Close sidebar
                      closeSidebar();
      
                      // Smooth scroll to target section
                      scrollToSection(targetSection);
                  }
              });
          });
      
          closeBtn.addEventListener('click', function(event) {
              event.preventDefault();
              closeSidebar();
          });
      
          function closeSidebar() {
              document.body.classList.remove("blur-background");
              gsap.to("#sidebar", { width: "0", duration: 0.5 });
          }
      
          function scrollToSection(section) {
              const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
              const startPosition = window.pageYOffset;
              const distance = targetPosition - startPosition;
              const duration = 1000;
              let startTime = null;
      
              function animation(currentTime) {
                  if (startTime === null) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const run = ease(timeElapsed, startPosition, distance, duration);
                  window.scrollTo(0, run);
                  if (timeElapsed < duration) requestAnimationFrame(animation);
              }
      
              function ease(t, b, c, d) {
                  t /= d / 2;
                  if (t < 1) return c / 2 * t * t + b;
                  t--;
                  return -c / 2 * (t * (t - 2) - 1) + b;
              }
      
              requestAnimationFrame(animation);
          }
      });
      
      
      
}
sidebarFuntionality();
    
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

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.logos-slide');

    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let isPaused = false;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;

            // Adjust scrollLeft to create a continuous loop effect
            if (slider.scrollLeft <= 0) {
                slider.scrollLeft += slider.scrollWidth;
            } else if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollLeft -= slider.scrollWidth;
            }
        });

        // Pause animation on hover
        slider.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        slider.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Prevent default drag behavior on images
        const images = slider.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => {
                e.preventDefault();
            });
        });
    });
});




// Function to handle swipe gestures (both touch and mouse)
function swipeCarousel(containerId) {
    const container = document.getElementById(containerId);
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let animationId = 0;

    // Mouse events
    container.addEventListener('mousedown', onMouseDown);

    function onMouseDown(event) {
        isDragging = true;
        startX = event.clientX;
        previousTranslate = currentTranslate;

        container.style.cursor = 'grabbing'; // Change cursor on mousedown

        // Add event listeners for mousemove and mouseup events
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event) {
        if (isDragging) {
            const diffX = event.clientX - startX;
            currentTranslate = previousTranslate + diffX;

            setSliderPosition();
        }
    }

    function onMouseUp() {
        isDragging = false;
        container.style.cursor = 'grab'; // Reset cursor on mouseup

        // Remove event listeners for mousemove and mouseup events
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        // Snap to nearest slide after releasing the mouse
        snapToNearestSlide();
    }

    // Function to set slider position based on currentTranslate
    function setSliderPosition() {
        container.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Function to snap to the nearest slide after releasing the mouse
    function snapToNearestSlide() {
        const slides = container.querySelectorAll('.logos-slide');
        const slideWidth = slides[0].offsetWidth;
        const totalSlides = slides.length;

        // Calculate the index of the nearest slide based on currentTranslate
        const index = Math.round(-currentTranslate / slideWidth);
        const translateValue = -index * slideWidth;

        // Apply the transform to container with animation
        animateSlide(translateValue);

        currentTranslate = translateValue;
    }

    // Function to animate slide transition
    function animateSlide(targetTranslate) {
        cancelAnimationFrame(animationId);

        const startTime = performance.now();
        const duration = 300; // Animation duration in milliseconds

        function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeOutCubic(progress);

            const newTranslate = previousTranslate + (targetTranslate - previousTranslate) * ease;
            container.style.transform = `translateX(${newTranslate}px)`;

            if (progress < 1) {
                animationId = requestAnimationFrame(animate);
            }
        }

        animationId = requestAnimationFrame(animate);
    }

    // Easing function (Cubic Out)
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
}

// Call swipeCarousel function for each slide container
document.addEventListener('DOMContentLoaded', function() {
    swipeCarousel('logos-slide1');
    swipeCarousel('logos-slide2');
    swipeCarousel('logos-slide3');
});





































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
  