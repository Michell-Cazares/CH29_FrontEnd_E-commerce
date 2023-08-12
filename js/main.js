var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // Auto Type
const typed = new Typed('.homeMultipleText', {
    strings: ['BIENVENIDX A </br><span style="color:#FBE053; font-size:60px;">ELOTES GUTIÉRREZ</span>', 'ACOMPÁÑANOS Y DESCUBRE LA ESENCIA DE </br><span style="color:#84BF68; font-size:70px;">MÉXICO</span>'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: Infinity
});
