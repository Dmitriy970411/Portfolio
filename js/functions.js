$(document).ready(function() {

     // header-nav
     var headerNav = $("#header");
     var scrollOffset = $(window).scrollTop();
     var headerH = $("#header").innerHeight();
     var burger = $("#nav");
     var navToggle = $(".nav-opener");
     var topNav = $(".top-nav");
 
    //  header-fixed
     checkScroll(scrollOffset);
 
     $(window).on("scroll", function () {
         scrollOffset = $(this).scrollTop();
         checkScroll(scrollOffset);
     });
 
     function checkScroll(scrollOffset) {
         if (scrollOffset > headerH) {
             headerNav.addClass("fixed");
         } else {
             headerNav.removeClass("fixed");
         }
     }

      // smooth-scroll
  $("[data-scroll]").on("click", function (event) {
   event.preventDefault();
   var $this = $(this);
   var elementId = $this.data("scroll");
   var idOffset = $(elementId).offset().top;

   $("body").removeClass("nav-open");
   burger.removeClass("nav-drop");
   topNav.removeClass("nav");
   navToggle.removeClass("nav-active");
   
   $("html,body").animate({
     scrollTop: idOffset
   }, 1000);
 })

 // burger-menu
 navToggle.on("click", function(event) {
   event.preventDefault();
   $(this).toggleClass("nav-active");
   burger.toggleClass("nav-drop");
   topNav.toggleClass("nav");
   $('body').toggleClass('nav-open');
});

// footer-scroll

$("[data-footer]").on("click", function (event) {
   event.preventDefault();
   var $this = $(this);
   var elementId = $this.data("footer");
   var idOffset = $(elementId).offset().top;

   $("html,body").animate({
     scrollTop: idOffset
   }, 5000);
 })
// verbose----------------------------------------
 // slick-carousel
$('.slick-carousel').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: false
 });


  // filter-start
  var filter = $("[data-filter]");

  filter.on("click", function (event) {
      event.preventDefault();

      var cat = $(this).data('filter');

      if (cat == 'all') {
          $("[data-cat]").removeClass("hide");
      } else {
          $("[data-cat]").each(function () {
              var workCat = $(this).data('cat');

              if (workCat != cat) {
                  $(this).addClass('hide');
              } else {
                  $(this).removeClass('hide');
              }
          });
      }
  });
   // filter-end

   // modal-window-start
   var modalCall = $("[data-modal]");
   var modalClose = $("[data-close]");

   modalCall.on("click", function (event) {
       event.preventDefault();

       var $this = $(this);
       var modalId = $(this).data('modal');



       $(modalId).addClass("show");
       $("body").addClass("no-scroll");


       setTimeout(function () {
           $(modalId).find(".modal__dialog").css({
               transform: "rotateX(0)"
           });
       }, 200);

   });

   modalClose.on("click", function (event) {
       event.preventDefault();
       var $this = $(this);
       var modalParent = $this.parents(".modal");

       modalParent.find(".modal__dialog").css({
           transform: "rotateX(90deg)"
       });

       setTimeout(function () {
           modalParent.removeClass("show");
           $("body").removeClass("no-scroll");
       }, 200);

   });

   $(".modal").on("click", function (event) {

       $(this).find(".modal__dialog").css({
           transform: "rotateX(90deg)"
       });

       setTimeout(function () {
           $(".modal").removeClass("show");
           $("body").removeClass("no-scroll");
       }, 200);

   });

   $(".modal__dialog").on("click", function (event) {

       event.stopPropagation();
       // cancel onclick perent

   });
   // modal-window-end

    // lasy-load-start
    $(function () {

      $(".read-me__col").slice(0, 3).show();
      $(".lasyload").on("click", function (event) {
          event.preventDefault();

          $(".read-me__col:hidden").slice(0, 3).slideDown();

      });
  });

  // lasy-load-end 

});

$('.popup-link').magnificPopup({

   fixedContentPos:true,
   items: [
  
     {
       src: '#popup-1',
       type: 'inline'
     },
     {
       src: '#popup-2',
       type: 'inline'
     },

     {
      src: '#popup-3',
      type: 'inline'
    }
     
   ],
   gallery: {
     enabled: true
   } 
});
   