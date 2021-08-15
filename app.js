const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

var sprk = document.getElementById("sprk");
var sprinklered = (sprk.checked) ? true : false; 

var occupancy = document.getElementById("occupancy").nodeValue;
var inputHeight = document.getElementById("height").nodeValue;
var inputWidth = document.getElementById("width").nodeValue;
var actualArea = document.getElementById("area-upo").nodeValue;
var lmtDist = document.getElementById("ld").nodeValue;

let testCompartment = new Compartment(inputHeight, inputWidth, actualArea, sprinklered, occupancy);

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
