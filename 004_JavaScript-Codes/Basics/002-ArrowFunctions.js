// function oddEvenTest(request){
//     if(request=="odd"){
//         return function(n){
//             console.log((n%2 != 0));
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log((n%2 == 0));
//         }
//     }
//     else{
//         console.log("Wrong Request !");
//     }
// }
// let odd=oddEvenTest("odd");
// let even=oddEvenTest("even");

//JavaScript function that returns array elements larger than a number......
// let arr=[1,2,3,4,5,6,7,8,9,10];
// function Check(arr,num){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){  result.push(arr[i]);  }
//     }
//     return result;
// }
// let result=Check(arr,5);
// Print(result);
// function Print(result){
//     for(let i=0;i<result.length;i++){
//         console.log(result[i]);
//     }
// }

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
console.log("Hello Everyone");
setTimeout(() => {
  console.log("I Am 3rd Year B.Tech Student");
}, 4000);
let id = setInterval(() => {
  console.log("Yash Is A Nice Guy");
}, 2000);
console.log("My Name Is Yash Pandey");
// const mul = (a, b) => {
//   return a * b;
// };
// clearInterval(id);
