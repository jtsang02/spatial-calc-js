const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const closeBtn = document.getElementById("close-output");
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

calculateBtn.addEventListener("click", () => {
  // read inputs
  let userSprk = !!checkbox.checked,
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

    let reqbody = {
      "h": userH,
      "w": userW,
      "LD": userLD,
      "actOpns": userAO,
      "sprk": userSprk,
      "group": userGroup
    };

    const apiUrl = "http://ec2-3-134-88-136.us-east-2.compute.amazonaws.com:3000/calculate";

    axios.post(apiUrl, reqbody).then((response) => {
      let data = response.data;
      document.getElementById("ao-output").innerHTML = checkAO(data.actualOpenings.toFixed(2) + " %");
      document.getElementById("upo-output").innerHTML = data.unprotectedOpenings.toFixed(2) + " %";
      document.getElementById("frr-output").innerHTML = data.frr;
      document.getElementById("const-output").innerHTML = data.construction;
      document.getElementById("cladding-output").innerHTML = data.cladding;
      document.getElementById("hero-output").style.display = "block";

      function checkAO(str) {
        return data.actualOpenings > data.unprotectedOpenings ? str.fontcolor("red") : str;
      }
    }
    ).catch((error) => {
      if (error.response.status == 400) {
        alert(error.response.data.errors[0]);
      }
      else {
        alert("Something went wrong. Please try again later.");
      }
    });
  }
});

clearBtn.addEventListener("click", () => {
  document.getElementById("emt-ftnote").style.display = "none";
  clearInputs();
});

closeBtn.addEventListener("click", () => {
  clearInputs();
  if (screen.width < 500)
    document.getElementById("hero-output").style.display = "none";
});