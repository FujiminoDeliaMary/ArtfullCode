var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween:0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // mousewheel: true,
  // freeMode: true,
  coverflowEffect: {
    rotate: 7,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: false  ,
    
  },
//  scrollbar: {
//   el: ".swiper-scrollbar",
//   hide: true,
//  },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  // spaceBetween: -1,
  loop : true,
});