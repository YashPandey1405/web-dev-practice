const person = {
  name: "Yash",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson = { name: "Divyam" };

// Using call() - Invokes the function immediately with a specified 'this' value
person.greet.call(anotherPerson, "Hello"); // Output: Hello, Divyam!

// Using bind() - Returns a new function with a specified 'this' value, to be called later
const boundGreet = person.greet.bind(anotherPerson, "Hi");
boundGreet(); // Output: Hi, Divyam!
