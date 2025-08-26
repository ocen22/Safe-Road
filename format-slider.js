const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  /*direction: 'vertical',*/
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
     },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.scrolling-button.next',
    prevEl: '.scrolling-button.prev',
  },

  // And if we need scrollbar
});
