// Declare An Object as Key-Value Pair....
let object = {
  name: "John",
  age: 30,
  GetFullName() {
    return this.name + " " + this.age;
  },
  //   Nested Object
  yash: {
    name: "Yash",
    age: 20,
  },
};
console.log(object);
console.log(object.GetFullName());
console.log(object.yash.name);
