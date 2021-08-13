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
    else 
      return false;
  }

  area() {
    return this.h * this.w;
  }

  ratio() {
    var height = this.h;
    var width = this.w;
    if (height / width > width / height)
      return height / width;
    else
      return width / height;
  }

  ratioCode() {
    var r = this.ratio();
    if (r < 3)
      return 1;
    else if (r <= 10)
      return 2;
    else
      return 3;
  }

  getAO() {
    return (this.actOpns / this.area()) * 100;
  }

  getUO() {
    var spTable, maxLD, maxArea;
    var LD1, LD2, area1, area2;
    var a, a1, a2, a3, a4;
    var x, y, z, shift_y;

    if (this.sprk) {
      shift_y = 1;
      z = 0;

      if (this.hazard()) {
        spTable = tableE;
        maxLD = 15;
        maxArea = 200;
      }

      if (!this.hazard()) {
        spTable = tableD;
        maxLD = 9;
        maxArea = 150;
      }
    }

    if (!this.sprk) {
      shift_y = 3;
      z = this.ratioCode();
      maxArea = 2000;

      if (this.hazard()) {
        spTable = tableC;
        maxLD = 70;
      }

      if (!this.hazard()) {
        spTable = tableB;
        maxLD = 50;
      }
    }

    const isLDlarger = (element) => element > this.LD;
    x = spTable[0].findIndex(isLDlarger) - 1;
    LD1 = spTable[0][x];
    LD2 = spTable[0][x + 1];

    for (let j = 0; j < spTable.length; j++)
      if (this.area() >= spTable[j][0] && z == spTable[j][1]) {
        y = j;
        area1 = spTable[y][0];
        area2 = spTable[y + shift_y][0];
      }

    a1 = spTable[y][x];
    a2 = spTable[y][x + 1];
    a3 = spTable[y + shift_y][x];
    a4 = spTable[y + shift_y][x + 1];

    if (this.LD == LD1 && this.area() == area1)
      a = a1;

    else if (this.LD == LD1 || this.LD > maxLD)
      a = (this.area() - area1) / (area2 - area1) * (a3 - a1) + a1;

    else if (this.area() == area1 || this.area() > maxArea)
      a = ((this.LD - LD1) / (LD2 - LD1)) * (a2 - a1) + a1;

    else {
      var temp1 = ((this.LD - LD1) / (LD2 - LD1)) * (a2 - a1) + a1;
      var temp2 = ((this.LD - LD1) / (LD2 - LD1)) * (a4 - a3) + a3;
      a = ((this.area() - area1) / (area2 - area1)) * (temp2 - temp1) + temp1;
    }
    return a;
  }
}

let comp1 = new Compartment(5, 5, 4, 10, false, "E"); // case 1
let comp2 = new Compartment(3, 12, 5, 10, true, "D"); // case 2
let comp3 = new Compartment(4, 10, 2.5, 8, false, "F-3"); // case 4
let comp4 = new Compartment(3.2, 14.9, 5.2, 10, false, "E"); // case 4 - LD > 9
let comp5 = new Compartment(10, 1900, 13, 10, false, "F-1"); // case 4- areaMax, LD max
let comp6 = new Compartment(10, 150, 10, 10, false, "F-2"); // case 4- areaMax, LD max
