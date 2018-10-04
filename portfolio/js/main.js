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

// fetch a json file with the quotes
const quotes = {};
const url = "http://andrew-millar.nl/quotes.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        quotes = data;
    })
    .catch(e => console.log(e));

// Sort of random quote generation, 
window.setInterval(() => {
    var random = Math.floor(Math.random() * quotes.length);
    var quote = quotes[random];
    document.querySelector(".quote h2").innerHTML = `<h2>${quote}</h2>`;
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
    // Function takes in a DOM element adds a click event handler that when 
    // clicked scrolls the page to the correct place in the page, an element id
    // Only side effects

    const parentId = el.parentNode.id;
    const id = direction == "up"? `#${ids[ids.indexOf(parentId)-1]}`: `#${ids[ids.indexOf(parentId)+1]}`;
    el.addEventListener("click", () => {
        document.querySelector(id).scrollIntoView({behavior:"smooth", block: "start"});
    })
}

// Lot DRYer than it was, don't go overboard.
last.forEach((el) => {
    scrollTo(el, "up");
});
    
next.forEach((el) => {
    scrollTo(el, "down");
});