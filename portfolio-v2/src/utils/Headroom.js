// displays navbar when user scrolls up / removes navbar when user scrolls down
var prevScrollpos = window.pageYOffset;
export const Headroom = () => {
  var nav = document.querySelector('.headroom')
  console.log(nav)
  var currentScrollPos = window.pageYOffset;
  if (nav != null){
  if (prevScrollpos > currentScrollPos) {
    
    nav.classList.add('headroom--pinned')
    nav.classList.remove('headroom--unpinned')

  } else {
    nav.classList.add('headroom--unpinned')
    nav.classList.remove('headroom--pinned')
    
  }
}


  console.log(nav)
  prevScrollpos = currentScrollPos;
}