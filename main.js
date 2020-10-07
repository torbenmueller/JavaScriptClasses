function myFunction() {
    document.getElementById("title").innerHTML = "Classes";
}

myFunction();

class Tier{ 
    constructor(name) {
      this.name = name;
    }
    
    sprich() {
      document.getElementById("tier").innerHTML = this.name + " macht ein Geräusch.";
    }
}

let t = new Tier("Tier");
t.sprich();
  
class Hund extends Tier{
    sprich() {
        document.getElementById("dog").innerHTML = this.name + " bellt.";
    }
}
  
let h = new Hund("Wolfi");
h.sprich();