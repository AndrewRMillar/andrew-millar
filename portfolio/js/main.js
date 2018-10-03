// Paralax effect, not working so far. On the back burner
window.addEventListener("scroll", () => {
    // get the scroll amount and move the backgroung image by a fraction of that amount

    let scrollFraq = window.scrollY / 4;
    const header = document.querySelector("header");
    header.style.backgoundPositionY = `0, ${scrollFraq}px`;   

    if(window.innerHeight/window.scrollY < 3) {
        document.body.classList.add("scrolled");
    }
});

// Sort of random quote generation, 
// TODO use a javascript promice to get a quote from a JSON file, also using PHP?
const quotes = [
    "<q>Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. <cite>Eagleson’s Law</cite></q>",
    "<q>There are only two industries that refer to their customers as “users”. – <cite>Edward Tufte</cite></q>",
    "<q>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – <cite>Martin Golding</cite></q>",
    "<q>A user interface is like a joke. If you have to explain it, it’s not that good.</q>",
    "<q>If debugging is the process of removing software bugs, then programming must be the process of putting them in – <cite>Edsger Dijkstra</cite></q>",
    "<q>Experience is the name everyone gives to their mistakes. - <cite>Oscar Wild</cite></q>",
    "<q>First, solve the problem. Then, write the code. - <cite>John Johnson</cite></q>",
    "<q>Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - <cite>Bill Gates</cite></q>",
    "<q>The only <em>intuitive</em> interface is the nipple. After that it’s all learned. - <cite>Bruce Edige</cite></q>",
]

window.setInterval(() => {
    var random = Math.floor(Math.random() * quotes.length);
    var quote = quotes[random];
    document.querySelector(".quote h2").innerHTML = quote;
}, 10000);

const section = document.querySelectorAll("section");
const next = document.querySelectorAll(".next");
const last = document.querySelectorAll(".last");
const ids = ["top"];

// Put all the section ids in the array
section.forEach((el) => {
    if(el.id){
        ids.push(el.id);
    } 
});

function scrollTo(el, direction) {
    // Function takes in a DOM element adds a click event handler that
    // scrolls the page to the correct place in the page, an element id
    // Only side effects

    const parentId = el.parentNode.id;
    const id = direction == "up"? `#${ids[ids.indexOf(parentId)-1]}`: `#${ids[ids.indexOf(parentId)+1]}`;
    el.addEventListener("click", () => {
        document.querySelector(id).scrollIntoView({behavior:"smooth"});
    })
}

// Lot DRYer than it was, don't go overboard.
last.forEach((el) => {
    scrollTo(el, "up");
});
    
next.forEach((el) => {
    scrollTo(el, "down");
});