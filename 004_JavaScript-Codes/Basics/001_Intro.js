// console.log("Yash Pandey Is Here....");
// let a=5,b=10;
// console.log("Sum Is : ",a+b);
// let age=21;
// let name="Yash Pandey";
// console.log(`${name} Is ${age} Years Old`);
// let str=prompt("Enter The String");
// // console.log(str.trim());
// console.log(str.toLowerCase());
// console.log(str.toUpperCase().trimStart());
// console.log(str.toUpperCase().trimEnd());
// console.log(str.trimStart().slice(1,4));

// const Student = {
//     Yash : {
//         name : "Yash Pandey",
//         age : 21,
//         CGPA : 8.7
//     },
//     Divyam : {
//         name : "Divyam ",
//         age : 20,
//         CGPA : 9.3
//     },
//     Shaswat : {
//         name : "Shaswat ",
//         age : 20,
//         CGPA : 9.1
//     }
// };

// const STUDENT = [
//     {
//         name : "Yash Pandey",
//         age : 21,
//         CGPA : 8.7
//     },
//     {
//         name : "Divyam ",
//         age : 20,
//         CGPA : 9.3
//     },
//     {
//         name : "Shaswat ",
//         age : 20,
//         CGPA : 9.1
//     }
// ];

// let num1=prompt("How Many Numbers Do You Want");
// let num3=prompt("End Range Of The Numbers");
// for(let i=0;i<num1;i++){
    //     let val=Math.floor(Math.random()*num3)+1;
    //     console.log(val);
    // }
    
let val=Math.floor(Math.random()*100)+1;
let count=1;
while(true){
    let temp=prompt("Enter A Number Between 1 & 100");
    if(temp=="quit"){
        console.log("User Quits The Game !");
        break;
    }
    else if(temp==val){
        console.log(`User Guessed The Correct Number ${val} In ${count} Attempts!`);
        break;
    }
    else{
        if(temp<val){
            console.log("Too Low , Guess A Bigger Number !");
        }
        else{
            console.log("Too High , Guess A Smaller Number !");
        }
    }
    count++;
}

