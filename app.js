const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

class Compartment {
  constructor(h, w, LD, actOpns, sprk, group) {
    this.h = h;
    this.w = w;
    this.LD = LD;
    this.actOpns = actOpns;
    this.sprk = sprk;
    this.group = group;
  }

  hazard() {
    if (this.group === "E" || this.group === "F-1" || this.group === "F-2")
      return true;
  }

  area() {
    let h = this.h;
    let w = this.w;
    return h * w;
  }

  ratio() {
    let h = this.h;
    let w = this.w;

    if (h / w > w / h) return h / w;
    else return w / h;
  }

  ratioCode() {
    let r = this.ratio;
    if (r < 3) return 1;
    else if (r <= 10) return 2;
    else return 3;
  }

  getAO() {
    return (this.actOpns / this.area()) * 100;
  }

  getUO() {
    
    /*var rowSize = 0,
      columnSize = 0,
      maxLD = 0,
      maxArea = 0;
    var x = 0,
      y = 0,
      shift_y = 0;
    z = 0;
    var LD1 = 0,
      LD2 = 0,
      area1 = 0,
      area2 = 0;
    var u1 = 0,
      u2 = 0,
      u3 = 0,
      u4 = 0,
      u = 0;*/

    if (this.sprk) {

      let shift_y = 1;

      if (this.hazard) {        // table 3.2.3.1.E
        let rowSize = 15;
        let columnSize = 20;
        let table = "tableE.txt";
        let maxLD = 15;
        let maxArea = 200;
      }

      if (!this.hazard) {        // table 3.2.3.1.D
        let rowSize = 14;
        let columnSize = 14;
        let table = "tableD.txt";
        let maxLD = 9;
        let maxArea = 150;
      }
    }

    if (!this.sprk) {
      let shift_y = 3;
      let z = this.ratioCode();
      let rowSize = 55;
      let maxArea = 2000;

      if (this.hazard) {
        let columnSize = 33;
        let table = "tableC.txt";
        maxLD = 70;
      }
    }

  }
}

let comp1 = new Compartment(2, 4, 5, 10, true, "D");
let comp2 = new Compartment(3, 12, 5, 10, true, "E");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
