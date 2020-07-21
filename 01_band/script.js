var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll(".content__slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  if (slideIndex >= x.length) {
    slideIndex = 0;
  }
  x[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(carousel, 2000);
}
