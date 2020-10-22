$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:4,
            
        }
    }
})
});

         /***** owl.carousel*****/ 

       //initiating jQuery
jQuery(function($) {
         $(document).ready( function() {
         //enabling stickUp on the '.navbar-wrapper' class
         $('.navbar-wrapper').stickUp();
     });
  });

jQuery(function($) {
         $(document).ready( function() {
         //enabling stickUp on the '.navbar-wrapper' class
         new WOW().init();
     });
  });
 
jQuery(function($) {
         $(document).ready( function() {
         //enabling stickUp on the '.navbar-wrapper' class
        $('.demo').animationCounter({

          start: 0,
          end: 1500,
          delay: 100

      });
      $('.code').animationCounter({

          start: 0,
          end: 1000,
          delay: 10

      });
      $('.bicycle').animationCounter({

          start: 0,
          end: 1500,
          delay: 500

      });
      $('.coffee').animationCounter({

          start: 0,
          end: 1000,
          delay: 100

      });
     });
  });
 


















