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
  const textoMultipleInicio = new Typed('.homeMultipleText', {
    strings: ['<span style="font-family: Yellowtail, cursive;">BIENVENIDO</span> A </br><span style="color:#FBE053; font-size:60px;">ELOTES GUTIÉRREZ</span>', 'ACOMPÁÑANOS Y DESCUBRE LA <span style="font-family: Yellowtail, cursive;">ESCENCIA</span> DE </br><span style="color:#84BF68; font-size:70px;">MÉXICO</span>','SIEMPRE ESTAMOS A UN <span style="font-family: Yellowtail, cursive;">CLICK</span> DE </br><span style="color:#84BF68; font-size:70px;">TÍ</span> <span style="font-family: Yellowtail, cursive;">Y DE</span> <span style="color:#FBE053; font-size:70px;"> TU ANTOJO</span>'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: Infinity
});
