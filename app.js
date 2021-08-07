const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

class Compartment {
  constructor (h, w, LD, actOpns,
               sprk, group) {
                this.h = h;
                this.w = w;
                //this.a = a;
                this.LD = LD;
                this.actOpns = actOpns;
                //this.uOpns = uOpns;
                //this.r = r;
                this.sprk = sprk;
                this.group = group;
                //this.haz = haz;
                //this.frr = frr;
                //this.constr = constr;
                //this.clad = clad;
              }
          
  hazard () {
    if(this.group === "E" || this.group === "F-1" || this.group === "F-2")
      return true;
    else
      return false;
  }
  
  area () {
    return this.h*this.w;
  }

  ratio () {
    if (h/w > w/h)
      return h/w;
    else
      return w/h;
  }

}

let comp1 = new Compartment(2, 4, 5, 10, true, "D");
console.log = "hazard is " + myCar.hazard();
console.log = "area is " + myCar.area();


mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});