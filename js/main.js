var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }, 
    keyboard: {
      enabled: true
    },
    // mousewheel: {
    //   thresholdDelta: 70
    // },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: true // set to false to keep autoplaying even when user interacts with the slider
    },
    
    breakpoints: {
      460: {
        slidesPerView: 1
      },
      // 768: {
      //   slidesPerView: 2
      // },
      1024: {
        slidesPerView: 2.7
      },
      1940: {
        slidesPerView: 3.7
      }
    }
  });


// navigation menu
const links = document.querySelector(".links"),
navEl = document.querySelector("nav"),
bodyEl = document.querySelector("body"),
toggleBtn = document.querySelector(".toggle-btn"),
toogleBtnIcon = document.querySelector(".toggle-btn i"), 
closeBtns = document.querySelectorAll(".close-btn");

// header change bg animation 
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navEl.classList.add("nav-scrolled");
    } else if (window.scrollY <= 50) {
        navEl.classList.remove("nav-scrolled");
    }
});

// header shrink scroll animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.paddingBlock = "10px";
    // document.getElementById("logo").style.height = "3vw";
  } else {
    document.getElementById("nav").style.paddingBlock = "20px";
    // document.getElementById("logo").style.height = "3vw";
  }
}

// open - close toggle mobile menu 
toggleBtn.onclick = function () {
    links.classList.toggle("open")
    const isOpen = links.classList.contains("open")

    toogleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}

// open - close toggle accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



