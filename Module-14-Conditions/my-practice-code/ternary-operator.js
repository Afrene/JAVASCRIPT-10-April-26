/**
 * TERNARY --> three parts
 * 
 *   ?    :
 * 
 *  condition ? do something when true : do something when false
*/
// CODE 1
//const age = 112;

// normal if-else
// if(age >=18){
//     console.log('You can vote.')
// }
// else {
//     console.log('Ghumai thako')
// }

// simple ternary
//age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')

// CODE 2

// let price = 500;
// const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }
// else {
//     price = price + 100;
// }

//sample ternary
// price = isLeader ? 0 : price + 100;
// console.log(price);

// output
//--------
// 600

// OPTIONAL: semi-advanced ternary

// let price = 500;
// const isLeader = false;

// if(isLeader === true){
//     if(price > 1000) {
//         price = price /2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 1000;
// }

// sample ternary 
let price = 500;
const isLeader = false;

price = isLeader 
    ? (price > 1000 ? price / 2 : 0) 
    : price + 1000;

console.log(price);

// output 
//---------------
// 1500

// 🧠 Logic breakdown

// 👉 যদি isLeader = true:

// price > 1000 → half
// না হলে → 0

// 👉 যদি isLeader = false:

// price + 1000