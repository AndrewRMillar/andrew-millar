// TODO: When an element gets into the view of the user do something
// node.getBoundingClientRect().top top of the element in relation to the window


// fetch a json file with the quotes
// fetch polyfill: http://github.github.io/fetch/
let quotes = {};

// Switched to axios
axios.get('http://andrew-millar.nl/php/getQuote.php')
.then((quote) => {
  console.log(quote);
})
.catch(e => {
  console.log(`error: ${e}`);
});

// function pastQuote () {
//   // Select a random quote from the quotes object 

//   // Check if there is anything in quotes
//   if(!quotes.hasOwnProperty("quotes")) {return};

//   var random = Math.floor(Math.random() * quotes.quotes.length);

//   while(quotes.quotes[random] == quotes.quote) {
//     var random = Math.floor(Math.random() * quotes.quotes.length);
//   }
//   quotes.quote = quotes.quotes[random];
//   document.querySelector(".quote").innerHTML = `<h2>${quote}</h2>`;
// }
// // Change the quote every so often
// window.setInterval(() => {
//   pastQuote();
// }, 20000);


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
  // clicked scrolls the page to the correct place in the page

  const parentId = el.parentNode.id;
  const id = direction == "up"? `#${ids[ids.indexOf(parentId)-1]}`: `#${ids[ids.indexOf(parentId)+1]}`;
  el.addEventListener("click", () => {
    document.querySelector(id).scrollIntoView({behavior:"smooth", block: "start"});
  })
}

last.forEach((el) => {
  scrollTo(el, "up");
});
    
next.forEach((el) => {
  scrollTo(el, "down");
});

// My own made casousel is not working for me right now, will revisit at a later date
// Going for th easier solution right now
$(document).ready(function(){
  $('#carousel-con').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false
  });
});

{
  // When clicking the contact link open a popup with a contact form
  const contactBtn = document.querySelectorAll(".contact");
  const contact = document.querySelector(".form-container");
  const closeForm = document.querySelector(".close-form"); 
  const form = document.querySelector(".form-container");
  contactBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#top").scrollIntoView({behavior:"instant", block: "start"});
      form.classList.add("show");
    });
  });

  closeForm.addEventListener("click", () => {
    form.classList.remove("show");
  });
}
