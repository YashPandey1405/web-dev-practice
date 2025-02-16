// A polyfill in JavaScript is a script that replicates modern functionality in older browsers that do not support it.

// Implementing ForEach Using The Polyfill...
if (!Array.prototype.ForEach_Yash) {
  // Fallback Case Of Polyfill .....
  Array.prototype.ForEach_Yash = function (ForEach_YashFn) {
    const orignalObj = this;

    for (let i = 0; i < orignalObj.length; i++) {
      ForEach_YashFn(orignalObj[i], i);
    }
  };
}

// Implementing map Using The Polyfill...
if (!Array.prototype.Map_Yash) {
  // Fallback Case Of Polyfill .....
  Array.prototype.Map_Yash = function (Map_YashFn) {
    const orignalObj = this;
    const ans = [];
    for (let i = 0; i < orignalObj.length; i++) {
      ans.push(Map_YashFn(orignalObj[i]));
    }
    return ans;
  };
}

// Implementing filter Using The Polyfill...
if (!Array.prototype.Filter_Yash) {
  // Fallback Case Of Polyfill .....
  Array.prototype.Filter_Yash = function (Filter_YashFn) {
    const ans = [];
    for (let i = 0; i < this.length; i++) {
      if (Filter_YashFn(this[i])) {
        ans.push(this[i]);
      }
    }
    return ans;
  };
}

// Implementing reduce Using The Polyfill...
if (!Array.prototype.Reduce_Yash) {
  // Fallback Case Of Polyfill .....
  Array.prototype.Reduce_Yash = function (Reduce_YashFn) {
    let acc = 0;
    for (let i = 0; i < this.length; i++) {
      acc += Reduce_YashFn(this[i]);
    }
    return acc;
  };
}

const arr = [1, 2, 3, 4, 5, 6];
const ForEach_YashFn = (value, index) => {
  console.log(`In ForEach_Yash Fn : Value at index ${index} is ${value}`);
};
const Map_YashFn = (value) => {
  return value * value;
};
const Filter_YashFn = (value) => {
  return value % 2 == 0;
};
const Reduce_YashFn = (value) => {
  return value;
};
const result1 = arr.ForEach_Yash(ForEach_YashFn);
const result2 = arr.Map_Yash(Map_YashFn);
console.log(result2);
const result3 = arr.Filter_Yash(Filter_YashFn);
console.log(result3);
const result4 = arr.Reduce_Yash(Reduce_YashFn);
console.log(result4);
