// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


// $(document).ready(function(){
//   $('.navbar-custom').affix({
//       offset: {
//         top: $('.landing-page').height()
//       }
// });	 
// });

// $(document).ready(function() {
//     $('.navbar').affix({
//      offset: {
//     top: function() { return $('.landing-page').height(); }
//       }
//     });
// });
var fadedIn = false

$(document).ready(function() {
  
$(window).scroll(function () {
  
    if ($(window).scrollTop() > $( window ).height()) {
      if(!fadedIn){
        $(".navbar-custom").css('display', 'none');
        fadedIn = true
      }
      $('.navbar-custom').addClass('navbar-fixed-top');
      $(".navbar-custom").css('background', 'white');
      $(".navbar-custom").css('position', 'fixed');
      $(".navbar-custom").css('box-shadow', '2px 2px 3px 1px #999');
      $(".navbar").fadeIn(500)
      $(".navbar-custom").css('display', 'block');

    }
    
    if ($(window).scrollTop() == 0) {
      $('.navbar-custom').removeClass('navbar-fixed-top');
      $(".navbar-custom").css('position', 'absolute');
      $(".navbar-custom").css('box-shadow', '0 0 0 0');

      fadedIn = false;

      if($(window).width() > 768){
        $(".navbar-custom").css('background', '0 0');
      }
    }
    
});
});

// $(document).ready(function(){       
//             var scroll_pos = 0;
//             $(document).scroll(function() { 
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > $( window ).height()) {
//                     $(".navbar-custom").css('background', 'blue');
//                 } else {
//                     $(".navbar-custom").css('background', ' 0 0');
//                 }
//             });
//         });

