const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const checkbox = document.getElementById("sprk-check");
const choice = document.getElementById("occupancy");
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");
const aoInput = document.getElementById("area-upo");
const ldInput = document.getElementById("ld");

const limitToNumbers = (element) => { // restrict input keys
  element.onkeydown = function (e) {
    if (!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || (e.keyCode > 36 && e.keyCode < 41) // arrow keys
      || (e.keyCode > 7 && e.keyCode < 10) // tab and backspace
      || e.keyCode == 190   // letters period
      || e.keyCode == 110)) // number pad period
      return false;
  }
};

limitToNumbers(heightInput);
limitToNumbers(widthInput);
limitToNumbers(aoInput);
limitToNumbers(ldInput);

const clearInputs = () => { // clear all input fields
  choice.value = "none";
  heightInput.value = null;
  widthInput.value = null;
  ldInput.value = null;
  aoInput.value = null;
  document.getElementById("ao-output").innerHTML = "";
  document.getElementById("upo-output").innerHTML = "";
  document.getElementById("frr-output").innerHTML = "";
  document.getElementById("const-output").innerHTML = "";
  document.getElementById("cladding-output").innerHTML = "";
};

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

calculateBtn.addEventListener("click", () => {
  // read inputs
  let userSprk = checkbox.checked ? true : false,
    userGroup = choice.options[choice.selectedIndex].value,
    userH = parseFloat(heightInput.value),
    userW = parseFloat(widthInput.value),
    userLD = parseFloat(ldInput.value),
    userAO = parseFloat(document.getElementById("area-upo").value);

  // display outputs
  if (heightInput.value.length == 0
    || widthInput.value.length == 0
    || ldInput.value.length == 0)
    alert("Enter valid numbers for height, width and limiting distance");

  else {
    let comp = new Compartment(userH, userW, userLD, userAO, userSprk, userGroup);

    function checkAO(str) {
      return comp.AO > comp.UPO ? str.fontcolor("red") : str;
    }

    if (comp.AO > 100)
      alert("Area of unprotected openings cannot exceed 100%");

    const stringAO = checkAO(comp.AO.toFixed(2) + " %");
    const stringUPO = comp.UPO.toFixed(2) + " %";

    document.getElementById("ao-output").innerHTML = stringAO;
    document.getElementById("upo-output").innerHTML = stringUPO;
    document.getElementById("frr-output").innerHTML = comp.frr;
    document.getElementById("const-output").innerHTML = comp.construction;
    document.getElementById("cladding-output").innerHTML = comp.cladding;
  }
});

clearBtn.addEventListener("click", () => {
  clearInputs();
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
