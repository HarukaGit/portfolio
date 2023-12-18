'use strict'

if (window.matchMedia('(max-width: 600px)').matches) {












  
  let addclass = document.getElementById('works').classList.add('container-width')
  console.log(addclass)
}



gsap.to("h1", {
    duration: 2,
    text: "This is the new text",
    ease: "none",
  });
