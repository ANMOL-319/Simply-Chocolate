import './js/modal';
import './js/swiper';
import './js/video';
import './js/mobile-menu';


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("page-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}