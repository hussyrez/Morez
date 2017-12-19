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

$(document).ready(function() {
  
$(window).scroll(function () {
  
    if ($(window).scrollTop() > $( window ).height()) {
      $('.navbar-custom').addClass('navbar-fixed-top');
      $(".navbar-custom").css('background', 'white');
      $(".navbar-custom").css('position', 'fixed');

    }
    
    if ($(window).scrollTop() == 0) {
      $('.navbar-custom').removeClass('navbar-fixed-top');
      $(".navbar-custom").css('position', 'absoluste');

      if($(window).width() > 768){
        $(".navbar-custom").css('background', '0 0');
      }
    }
    
});
});


$(document).ready(function(){ 
  alert("hello world")
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

