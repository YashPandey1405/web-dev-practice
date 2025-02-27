const user = {
  name: "Yash Pandey",
  age: 21,
  email: "temp@gmailcom",
  password: 123,
};

const proxyUser = new Proxy(user, {
  // Get Method In Proxy....
  get(target, property) {
    if (property === "password") {
      throw new Error("Password is not accessible");
    }
    return target[property];
  },

  // Set Method In Proxy....
  set(target, property, value) {
    if (property === "password") {
      throw new Error("Password cannot be changed");
    }
    target[property] = value;
  },
});

// Implement -ve Index In JS....(Shallow Copy)
function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        if (target.length + index <= 0) {
          throw new Error("Index Out Of ArrayBounds");
        }
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        if (target.length + index <= 0) {
          throw new Error("Index Out Of ArrayBounds");
        }
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrProxy = negativeIndex(arr);
console.log(arrProxy[-1]); // Output: 10
arrProxy[-3] = 10;
console.log(arrProxy[-3]); // Output: 10
