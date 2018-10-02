// paralax effect from scratch, for fun
window.addEventListener("scroll", () => {
    // get the scroll amount and move the backgroung image by a fraction of that amount
    let scrollFraq = window.scrollY / 4;
    const header = document.querySelector("header");
    // console.log(`0, ${scrollFraq}px`);
    header.style.backgoundPositionY = `0, ${scrollFraq}px`;   
    // console.log(header.style.backgroundPositionY);

    // console.log(window.innerHeight,window.scrollY);
    if(window.innerHeight/window.scrollY < 3) {
        // console.log("done");
        
        document.body.classList.add("scrolled");
    }
});

const quotes = [
    "<q>Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. <cite>(Eagleson’s Law)</cite></q>",
    "<q>There are only two industries that refer to their customers as “users”. – <cite>(Edward Tufte)</cite></q>",
    "<q>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – <cite>Martin Golding</cite></q>",
    "<q>A user interface is like a joke. If you have to explain it, it’s not that good.</q>",
    "<q>If debugging is the process of removing software bugs, then programming must be the process of putting them in – <cite>Edsger Dijkstra</cite></q>"
]

window.setTimeout(() => {
    var random = Math.round(Math.random() * quotes.length);
    random = random < 5? random: 4;
    var quote = quotes[random];
    const quoteEl = document.querySelector(".quote h2");
    quoteEl.innerHTML = quote;
    // console.log(random);
}, 10000);