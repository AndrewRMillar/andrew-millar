
function isAnyPartOfElementInViewport(el) {
    // Return true if any part of el is in the viewport
    
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const rect   = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight),
    windowWidth  = (window.innerWidth || document.documentElement.clientWidth),
    vertInView   = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0),
    horInView    = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return (vertInView && horInView);
}

window.addEventListener("scroll", () => {
    const animate = Array.from(document.getElementsByClassName('animateIn'));
    // console.log(animate[0]);
    
    animate.forEach(el => {
        // console.log(isAnyPartOfElementInViewport(el));
        if(isAnyPartOfElementInViewport(el)) {
            // console.log(el);           
            el.classList.add('animatedIn');
        } else {
            // console.log(`${el} in not in view`);
            
        }
    });
});  
