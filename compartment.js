class Compartment {

  constructor(h, w, LD, actOpns, sprk, group) {
    this.h = h;
    this.w = w;
    this.LD = LD;
    this.actOpns = actOpns;
    this.sprk = sprk;
    this.group = group;
  }

  get hazard() {  
    return (this.group === "E" || this.group === "F-1" || this.group === "F-2") ? true : false;
  }

  get area() {
    return this.h * this.w;
  }

  get ratio() {
    return (this.h / this.w > this.w / this.h) ? this.h / this.w : this.w / this.h;
  }

  ratioCode() {
    if (this.ratio < 3)
      return 1;
    else
      return (this.ratio <= 10) ? 2 : 3;
  }

  get AO() {
    return (this.actOpns / this.area) * 100;
  }

  get UPO() {
    var table, maxLD, maxArea;
    var LD1, LD2, area1, area2;
    var x, y, z, shift_y;

    if (this.sprk) {
      shift_y = 1;
      z = 0;

      if (this.hazard) {
        table = tableE;
        maxLD = 15;
        maxArea = 200;
      }

      if (!this.hazard) {
        table = tableD;
        maxLD = 9;
        maxArea = 150;
      }
    }

    else {
      shift_y = 3;
      z = this.ratioCode();
      maxArea = 2000;

      if (this.hazard) {
        table = tableC;
        maxLD = 70;
      }

      if (!this.hazard) {
        table = tableB;
        maxLD = 50;
      }
    }

    const isLDlarger = (element) => element > this.LD;
    x = table[0].findIndex(isLDlarger) - 1;
    LD1 = table[0][x];
    LD2 = table[0][x + 1];

    for (let j = 0; j < table.length; j++)
      if (this.area >= table[j][0] && z == table[j][1]) {
        y = j;
        area1 = table[y][0];
        area2 = table[y + shift_y][0];
      }

    var a1 = table[y][x];
    var a2 = table[y][x + 1];
    var a3 = table[y + shift_y][x];
    var a4 = table[y + shift_y][x + 1];

    if (this.LD == LD1 && this.area == area1)
      return a1;

    else if (this.LD == LD1 || this.LD > maxLD)
      return (this.area - area1) / (area2 - area1) * (a3 - a1) + a1;

    else if (this.area == area1 || this.area > maxArea)
      return ((this.LD - LD1) / (LD2 - LD1)) * (a2 - a1) + a1;

    else {
      var temp1 = ((this.LD - LD1) / (LD2 - LD1)) * (a2 - a1) + a1;
      var temp2 = ((this.LD - LD1) / (LD2 - LD1)) * (a4 - a3) + a3;
      return ((this.area - area1) / (area2 - area1)) * (temp2 - temp1) + temp1;
    }
  }

  minConstructionReq (columnIndex) {
    if (this.UPO >= 100)
      return "none";
    
    else {
      const limits = [10, 25, 50, 100];
      
      const isAreaLarger = (areaLimit) => this.UPO <= areaLimit;
      var i = limits.findIndex(isAreaLarger);

      if (this.hazard)
        return constTable[i + 4][columnIndex];
      else
        return constTable[i][columnIndex];
      }
  }
  
  get frr () {
    return this.minConstructionReq(0);
  }

  get construction () {
    return this.minConstructionReq(1);
  }

  get cladding () {
    return this.minConstructionReq(2);
  }
  
}

let comp1 = new Compartment(2, 7.5, 2.5, 10, false, "C"); // case 1
let comp2 = new Compartment(2, 7.5, 1.5, 10, true, "E"); // case 2
let comp3 = new Compartment(3, 20, 2.5, 8, false, "F-3"); // case 4
let comp4 = new Compartment(3, 20, 4.0, 10, true, "C"); // case 4 - LD > 9
let comp5 = new Compartment(10, 1900, 13, 10, false, "F-1"); // case 4- areaMax, LD max
let comp6 = new Compartment(10, 150, 10, 10, true, "C"); // case 4- areaMax, LD max
let comp7 = new Compartment(0.2, 0.5, 1.1, 0, true, "F-2"); // 0 lot line