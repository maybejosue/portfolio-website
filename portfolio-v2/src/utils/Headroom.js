// displays navbar when user scrolls up / removes navbar when user scrolls down
var prevScrollpos = window.pageYOffset;
export const Headroom = () => {
  var nav = document.querySelector('.headroom')
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos, prevScrollpos)
  if (nav != null){
    if (currentScrollPos == 0){
      nav.classList.remove('headroom--pinned')
    } else if(prevScrollpos > currentScrollPos) {
    
    nav.classList.add('headroom--pinned')
    nav.classList.remove('headroom--unpinned')
  } else {
    nav.classList.add('headroom--unpinned')
    nav.classList.remove('headroom--pinned')
    
  }
}


  prevScrollpos = currentScrollPos;
}