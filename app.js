const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

//let comp1 = new Compartment(5, 5, 4, 10, true, "F-2"); // case 1

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
