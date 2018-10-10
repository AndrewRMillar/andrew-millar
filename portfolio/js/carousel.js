// Carousel code
// when the...
const carouselItems = document.querySelectorAll(".car");
const lastBtn = document.querySelector(".lastt");
const nextBtn = document.querySelector(".nextt");
const classes = [];
let activeItem = document.querySelector(".active");
let targetIndex = 0;

carouselItems.forEach((item) => {
  // Get an array with second classnames
  classes.push(item.classList[1]);
});

function changeActiveItem(dir) {
  // Function takes in the direction detects what is the active 
  // item then determins the next item repending on the direction 
  // and changes the active item to that item
  
  activeItem = document.querySelector(".active");
  itemClass = activeItem.classList[1];
  targetIndex = classes.indexOf(itemClass);
  if(dir == "up") {
    // Determine what will be the index of the next item 
    targetIndex == classes.length-1? targetIndex = 0: targetIndex++;
    activeItem.classList.add("leave-left");
    carouselItems[targetIndex].classList.add("active");
    window.setTimeout(() => {
      activeItem.classList.remove("active");
      activeItem.classList.remove("leave-left");
    }, 10000)
  } else {
    targetIndex == 0? targetIndex = classes.length-1: targetIndex--;
    activeItem.classList.add("leave-right");
    carouselItems[targetIndex].classList.add("active");
    window.setTimeout(() => {
      activeItem.classList.remove("active");
      activeItem.classList.remove("leave-right");
    }, 10000)
  }
  activeItem.classList.remove("active");
  carouselItems[targetIndex].classList.add("active");
}

lastBtn.addEventListener("click", () => {
  changeActiveItem("down");  
}); 
nextBtn.addEventListener("click", () => {
  changeActiveItem("up");  
});

// There needs to be a transition, something like a timeout on the button press 
// that adds a class to the leaving active item and one to the new active item 
// and removes them after the transition is finished, say 300ms