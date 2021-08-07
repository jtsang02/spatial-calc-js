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
    let h = this.h;
    let w = this.w;
    return h*w;
  }

  ratio () {
    let h = this.h;
    let w = this.w;

		if (h/w > w/h)
			return h/w;
		else
			return w/h;
  }

  ratioCode(){
    let r = this.ratio();
    if (r < 3)
      return 1;
    else if (r <=10)
      return 2;
    else
      return 3;
  }
}

let comp1 = new Compartment(2, 4, 5, 10, true, "D");
let comp2 = new Compartment(3, 12, 5, 10, true, "E");

console.log = "hazard is " + comp1.hazard();
console.log = "area is " + comp1.area();
console.log = "ratio is " + comp1.ratio();


mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});