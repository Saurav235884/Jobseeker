var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay:3000
  },
  centerSlide:'true',
  grabCursor:'true',
  fade:'true',
  loop: true,
  // slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:'true',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView : 1,
    },
    768:{
      slidesPerView : 2,
    },
    992:{
      slidesPerView : 3,
    },
  },
});



// navbar 

var btn = document.getElementById('navbar');
var navlink = btn.getElementsByClassName('nav-link');

for(var i=0; i < navlink.length; i++)
{
  navlink[i].addEventListener('click',function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += "active";
  });
}