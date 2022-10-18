// fixed header
$(window).scroll(function(){
  var scrollTop =$(window).scrollTop();
  if(scrollTop >=100){
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header');
  }
});

//gender slider
$('.slider-items-wrapper').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 0,
  speed: 3000,
  adaptiveHeight: true,
  prevArrow:'<i class="fas fa-chevron-right"></i>',
  nextArrow:'<i class="fas fa-chevron-left"></i>'
});
  
//Body shape slider
$('.body-shape-slider-wrapper, .feet-type-slider-wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  autoplay: false,
  autoplaySpeed: 0,
  speed: 1000,
  slidesToShow: 3,
  prevArrow:'<i class="fas fa-chevron-right"></i>',
  nextArrow:'<i class="fas fa-chevron-left"></i>',
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});