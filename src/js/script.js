$(function () {
  $(".carousel__inner").slick({
      slidesToShow: 1,
      adaptiveHeight: true,
      speed: 1000,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  dots: true,
              }
          }
      ]
  });
});
