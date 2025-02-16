// JS Provides An Default Constructor With Us....
// constructor(){}

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullName() {
    return `First Name Is '${this.fname}' And Last Name Is '${this.lname}'`;
  }
}

const p1 = new Person("Yash", "Pandey");
console.log(p1.getFullName());

// In JavaScript, `.prototype` is a property of constructor functions (or classes) that defines
// shared methods and properties for instances, while `.__proto__` is an instance property that
// points to its constructor’s `.prototype`. This forms the prototype chain, enabling inheritance.
// When an object is created using `new ClassName()`, its `.__proto__` is set to
// `ClassName.prototype`, allowing access to shared methods.
