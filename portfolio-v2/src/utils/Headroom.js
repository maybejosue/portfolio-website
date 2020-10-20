// displays navbar when user scrolls up / removes navbar when user scrolls down
var prevScrollpos = window.pageYOffset;
var hey = document.body.scrollLeft
export const Headroom = () => {
  var nav = document.querySelector('.headroom')
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos, prevScrollpos, hey)
  if (nav != null){
     console.log(currentScrollPos)
     if (0 < currentScrollPos & currentScrollPos < 150){
      nav.style.top = "0";
    } else if (prevScrollpos > currentScrollPos) {
      nav.style.top = "0";

  } else {
    nav.style.top = "-150px";

    
  }
}


  prevScrollpos = currentScrollPos;
}