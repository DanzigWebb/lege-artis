
$(document).ready(function() {
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
          items:2,
          nav:false
        },
        768:{
            items:3,
            nav:false
        },
        1070:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
});
