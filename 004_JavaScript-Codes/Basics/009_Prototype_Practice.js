// Added One Prototype Function In Function Object Class.....
Function.prototype.YashBhai = function () {
  console.log(`The Current Function Is ${this.name} ()`);
  //   console.log("Yash Bhai");
};

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet.YashBhai();

let ans = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

console.log(ans);
