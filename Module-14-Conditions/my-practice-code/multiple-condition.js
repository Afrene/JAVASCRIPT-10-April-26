const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
height = 71;

//CODE - 1 

// if(salary  > 20000 && height < 66) // 71 < 66 -- false -- both condition should be true
// {
//     console.log('su-- patro');

// }
// else{
//     console.log('onno patro khuji');
// }

// 💡 Key Learning
// --------------------
// const → change করা যায় না
// && → দুইটাই true হতে হবে
// একটা false হলে → পুরো condition false


// CODE - 2

// if(salary > 25000 || height > 72)
// {
//     console.log('eso baba kobul');
// }
// else{
//     console.log('vak tui mukbul');
// }

// Type Error because const variable cannot change


// CODE - 3

// more and more condition

// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }

// TypeError because of const height 

// if(salary > 25000 && height > 72 && isBCS == true){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }

// -----------------COMPLEX CONDITION--------------------
// if((salary > 25000 && hasCar == true) || isBCS== true ){
//     console.log('tomar 14 gosti raji')
// }

// if((salary > 25000 || hasCar == true) && isBCS== true ){
//     console.log('tomar 14 gosti raji')
// }

