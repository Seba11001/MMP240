jQuery(document).ready(function ($) {
            // Your jQuery code here, using $ to refer to jQuery.
            /*
               This is the code to slide the main navigation up and down.
            */
            $('#menu_button').click(function (evt) {
                console.log('evt', evt);
                evt.preventDefault();
                $('#main_nav').slideToggle();
            }); //end menu_button
            //this code taken from Sebastien on Stackoverflow: http://stackoverflow.com/questions/6461300/triggering-jquery-with-css-media-queries
            //it's been rearranged slightly
            //leave the lines below and then write your code in the doneResizing function below
            doneResizing();
            var id;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(doneResizing, 0);
            });

            function doneResizing() {
                //this code requires that you have Modernizr included BEFORE this file. Here is modernizr: https://modernizr.com/
                //the trick with min-width media queries is that you need to start from your largest and go down. In the else at the end you can write  js for any size below your smallest min-width.
                if (Modernizr.mq('screen and (min-width:45em)')) {
                    $('#main_nav').show(); //make sure it is showing at larger sizes
                }
                else {
                    //Your code goes here for screens below 45em in this example.
                    $('#main_nav').hide(); //make sure hiding at smaller sizes
                }
              console.log('resized');
            } //end doneResizing
        });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}