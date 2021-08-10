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
    var h = this.h;
    var w = this.w;
    return h * w;
  }

  ratio() {
    var h = this.h;
    var w = this.w;

    if (h / w > w / h)  return h / w;
    else                return w / h;
  }

  ratioCode() {
    var r = this.ratio;
    if (r < 3)        return 1;
    else if (r <= 10) return 2;
    else              return 3;
  }

  getAO() {
    return (this.actOpns / this.area()) * 100;
  }

  getUO() {
    var rowSize, columnSize, maxLD, maxArea;
    var x, y, shift_y, z;
    var LD1, LD2, area1, area2;
    var u1, u2, u3, u4, u;
    var table;   

    if (this.sprk) {

      shift_y = 1;
      z = 0;

      if (this.hazard) {        // table 3.2.3.1.E
        rowSize = 15;
        columnSize = 20;
        table = "tableE.txt";
        maxLD = 15;
        maxArea = 200;
      }

      if (!this.hazard) {        // table 3.2.3.1.D
        rowSize = 14;
        columnSize = 14;
        table = "tableD.txt";
        maxLD = 9;
        maxArea = 150;
      }
    }

    if (!this.sprk) {    
      shift_y = 3;
      z = this.ratioCode();
      rowSize = 55;
      maxArea = 2000;

      if (this.hazard) {      // table 3.2.3.1.C
        columnSize = 33;
        table = "tableC.txt";
        maxLD = 70;
      }

      if (!this.hazard) {     // table 3.2.3.1.B
        columnSize = 29;
        table = "tableB.txt";
        maxLD = 50;
      }
    }

    let spTable = [
    [0,		0,	1.2,	1.5,	2,	2.5,	3,	4,	5,	6	,7,	8,	9,	10000000],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [0,		0	,16	,24	,42,	66,	100,	100,	100,	100,	100,	100,	100,	100],
    [10,	0,	16,	24,	42,	66,	100,	100,	100,	100,	100,	100,	100,	100]];

    /*
    const spTable = [rowSize][columnSize];
    var fr = new FileReader();
    for (var row = 0; row < rowSize; row++)
      for (var column = 0; column < columnSize; column++)
        fr.readAsText("/src/" + table);  // does this work??
    */

    for (var i = 0; i < columnSize; i++)
      if (this.LD >= spTable[0][i]){
        x = i;
        LD1 = spTable[0][x];
        LD2 = spTable[0][x+1];
        if (this.LD == LD1)
          var exactLD = true;
      }
    
    for (var j = 0; j < rowSize; j++)
      if (this.area() >= spTable[j][0] && z == spTable[j][1]){
        y = j;
        area1 = spTable[y][0];
        area2 = spTable[y + shift_y][0];
        if (this.area() == area1)
          var exactArea = true;
      }

    u1 = spTable[y][x];
    u2 = spTable[y][x + 1];
    u3 = spTable[y + shift_y][x];
    u4 = spTable[y + shift_y][x + 1];
    
    if (exactLD && exactArea)
      u = u1;

    else if (exactLD || LD > maxLD)
      u = (this.area() - area1) / (area2 - area1) * (u3 - u1) + u1;

    else if (exactArea || this.area() > maxArea)
      u = (LD - LD1) / (LD2 - LD1) * (u2 - u1) + u1;
    
    else {
      var temp1 = (LD - LD1) / (LD2 - LD1) * (u2 - u1) + u1;
			var temp2 = (LD - LD1) / (LD2 - LD1) * (u4 - u3) + u3;
			u = (this.area() - area1) / (area2 - area1) * (temp2 - temp1) + temp1;
    }
    return u;
  }
}

let comp1 = new Compartment(2, 5, 1.5, 10, true, "D");
let comp2 = new Compartment(3, 12, 5, 10, false, "E");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
