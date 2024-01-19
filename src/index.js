const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");
var modal = document.getElementById("myModal");

var fullVersion = document.getElementById("tempModal1");
var part9 = document.getElementById("tempModal2");
var span = document.getElementsByClassName("close")[0];

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

const openPopUp = (event) => {
  event.onclick = function () {    // When user clicks on button, open modal
    modal.style.display = "block";
  };
};

openPopUp(fullVersion);
openPopUp(part9);

span.onclick = function () {  // When the user clicks on <span> (x), close modal
  modal.style.display = "none";
};

window.onclick = function (event) {  // When  user clicks anywhere outside of the modal, close
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const claddingNote = () => {
  if (document.getElementById("const-output").innerHTML == "Combustible/EMT/Noncombustible")
    document.getElementById("emt-ftnote").style.display = "block";
  else
    document.getElementById("emt-ftnote").style.display = "none";
};

