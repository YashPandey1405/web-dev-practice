class Father {
  constructor(Fname, Fage) {
    this.Fname = Fname;
    this.Fage = Fage;
  }
  YashBhai() {
    console.log("Yash Bhai");
  }
  getDetails() {
    console.log(`Father's Name is ${this.Fname} and Age is ${this.Fage}`);
  }
}
class Son extends Father {
  constructor(Fname, Fage, Sname, Sage) {
    super(Fname, Fage);
    this.Sname = Sname;
    this.Sage = Sage;
  }
  YashBhai() {
    console.log("Yash Bhai");
  }
  getDetails() {
    super.getDetails();
    console.log(`Son's Name is ${this.Sname} and Age is ${this.Sage}`);
  }
}

const Yash = new Son("Prabhash Pandey", 52, "Yash Pandey", 21);
Yash.getDetails();
