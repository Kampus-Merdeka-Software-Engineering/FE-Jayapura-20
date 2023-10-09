// const { response } = require("express");
// const { daerah } = require("../../app/controller");

//Header Slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("header-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;

  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//Review Slide
var slideIndex = 1;
setInterval(() => {
  showDivs(slideIndex);
  slideIndex++;
}, 2000);
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("review-slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}
