// displays navbar when user scrolls up / removes navbar when user scrolls down
var prevScrollpos = window.pageYOffset;
export const Headroom = () => {
  var nav = document.querySelector('.headroom')
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos, prevScrollpos)
  if (nav != null){

    if (prevScrollpos > currentScrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-150px";
    }
}


  prevScrollpos = currentScrollPos;
}