

var slides = document.querySelectorAll(".sections");

i = 1;

function showAnime(i) {

}

anime({
    targets: '.box',
    translateX: '50%',
    duration: 2000
});

$(function(){  // $(document).ready shorthand
    $('.sections').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.sections').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  console.log("$(this)");
                  anime({
                    targets: this,
                    opacity: 1,
                    duration:2000
                });
                      
              }
              
          }); 
      
      });
      
  });