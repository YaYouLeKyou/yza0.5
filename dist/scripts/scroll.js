
const bg = document.getElementById('js-scroll');


window.addEventListener('scroll', function(){

  scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

  // IMAGE APPEAR (APPEAR AT 42% OF SCROLL)
  if (scrollValue > 0.45 && scrollValue < 0.75){
    bg.style.background="rgb(255,255,255)";
    bg.style.transition="all ease 1s"
    
  }
  else if(scrollValue > 0.75){
    bg.style.background="black";
  }
  else{
      bg.style.background="rgb(0,0,0)";
  }

});
