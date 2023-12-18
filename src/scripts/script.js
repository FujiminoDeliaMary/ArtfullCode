
import React from "react";



// Animation du menu
const menuTriggers = document.querySelectorAll('.menuTrigger');
const menu = document.querySelector('.header__menu');

const menuBurger = document.querySelector('.header__menuBurger');



menuTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  menu.classList.toggle("visible");
  menuBurger.classList.toggle('open');

}


// Animation du carroussel de services


// var swiper = new Swiper(".mySwiper1", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   grabCursor:true,
//   autoplay: {
//       delay: 4500,
//       disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//       0: {
//           slidesPerView: 1,
//       },
//       520: {
//           slidesPerView: 1,
//       },
//       768: { 
//           slidesPerView: 1,
//       },
//       1000: {
//           slidesPerView: 1,
//       },
//   }
// });





