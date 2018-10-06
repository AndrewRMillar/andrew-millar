// I need to have a fallback or polyfill (there is no polyfill) 
// for arrow functions, I don't really like the modernizer solution
// Need to add the modernizer if statements other wise 


// Paralax effect, not working so far. On the back burner
window.addEventListener("scroll", () => {
    // get the scroll amount and move the backgroung image by a fraction of that amount
    // For some reason this doesn't work, moving on coming 

    // let scrollFraq = window.scrollY / 4;
    // const header = document.querySelector("header");
    // header.style.backgoundPositionY = `0, ${scrollFraq}px`;   

    if(window.innerHeight/window.scrollY < 3) {
        document.body.classList.add("scrolled");
    }
});

// fetch a json file with the quotes
// fetch polyfill: http://github.github.io/fetch/
let quotes = {};
const url = "https://millar-knorr.nl/quotes.json";

fetch(url, {
    method: "POST",
    mode: "no-cors"})
.then(response => response.json())
.then(data => {
    quotes = data;
    pastQuote();
})
.catch(e => console.log(e));

function pastQuote () {
    // Select a random quote from the quotes object 
    var random = Math.floor(Math.random() * quotes.quotes.length);
    var quote = quotes.quotes[random];
    document.querySelector(".quote").innerHTML = `<h2>${quote}</h2>`;
}
// Change the quote every so often
window.setInterval(() => {
    pastQuote();
}, 20000);


// Setup for the scrollIntoView functionality
const section = document.querySelectorAll("section");
const next = document.querySelectorAll(".next");
const last = document.querySelectorAll(".last");
const ids = ["top"]; // first id is not of a section but a header

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

