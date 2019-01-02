
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

function animateStickyBar() {
    const face = document.getElementsByClassName('face')[0];
    const rect = face.getBoundingClientRect().top;
    let ratio = (face.offsetTop - window.pageYOffset)/face.offsetTop;
        ratio = ratio > 0? ratio: 0;
    const scale = 0.5 + (0.5 * ratio);
    let translate = -((45 / face.offsetTop) * window.pageYOffset);
    translate = translate > -45? translate: -45;
    // console.log(scale, translate);

    face.style.transform = `scale(${scale}) translateX(${translate}vw)`;

    if (face.getBoundingClientRect().top < 3) {
        document.body.classList.add('face-at-top');
    } else {
        document.body.classList.remove('face-at-top');
    }
}

window.addEventListener("scroll", () => {
    const animate = Array.from(document.getElementsByClassName('animateIn'));

    animateStickyBar();

    console.log(document.getElementsByTagName('h1')[0].getBoundingClientRect().top);
    
    
    animate.forEach(el => {
        if(isAnyPartOfElementInViewport(el)) {
            el.classList.add('animatedIn');
        } else {
            // console.log(`${el} in not in view`);
        }
    });
});  


