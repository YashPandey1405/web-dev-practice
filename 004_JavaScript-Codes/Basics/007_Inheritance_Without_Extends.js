class Father {
    constructor(Fname, Fage) {
      this.Fname = Fname;
      this.Fage = Fage;
    }
    YashBhai() {
      console.log("Yash Bhai");
    }
    getDetails() {
      return `Father's Name is ${this.Fname} and Age is ${this.Fage}`;
    }
  }
  
  // Son Constructor
  function Son(Sname, Sage, Fname, Fage) {
    Father.call(this, Fname, Fage); // Call Father constructor
    this.Sname = Sname;
    this.Sage = Sage;
  }
  
  // Manually setting the prototype chain
  Son.prototype = Object.create(Father.prototype);
  Son.prototype.constructor = Son;
  
  // Adding Son's own method
  Son.prototype.getDetails = function () {
    return `Son's Name is ${this.Sname} and Age is ${this.Sage}`;
  };
  
  // Creating an instance
  const Yash = new Son("Yash Pandey", 21, "Pandey Sr.", 50);
  
  console.log(Yash.YashBhai()); // Works
  console.log(Yash.getDetails()); // "Son's Name is Yash Pandey and Age is 21"
  