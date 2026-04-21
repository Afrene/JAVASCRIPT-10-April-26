// **************************************
// Name : Afrene  Zebeen Kolly
// Date 16 April, 2026
// Time:11:13 AM
// **************************************

// ******************** PROBLEM 1 ***********************

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// Solution

// let burgerPrice = 600;
// if(burgerPrice > 500)
// {
//     console.log('free coke');
// }
// else{
//     console.log('coke price: 30tk');

// }

// output
// --------------
// free coke
//------------------------------------------
//------------------------------------------
// ternary operator
// --------------------

// let burgerPrice = 600;
// let result = burgerPrice > 500 ? 'free coke' : 'coke price : 30tk' ;
// console.log(result);

//****************** PROBLEM 2 ********************* */

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 60; // kg
// let height = 1.6; // meter

// let bmi = weight / (height * height);
// console.log("BMI:",bmi.toFixed(2));
// if(bmi < 18.5)
// {
//     console.log('you are underweight');
// }
// else{
//     if(bmi >= 18.5 && bmi <= 24.9)
//     {
//         console.log('you are normal');
//     }
//     else if(bmi >= 25 && bmi <= 29.9)
//     {
//         console.log('you are overweight');
//     }
//     else{
//         console.log('obese');
//     }
// }

// output
// -----------
// BMI: 23.44
// you are normal

// 🔍 Logic Breakdown
// 🧠 Step 1: BMI Calculate
// bmi = weight / (height * height)
// 🧠 Step 2: Condition check (nested)

// 👉 1st check

// BMI < 18.5 → Underweight

// 👉 না হলে → ভিতরে ঢুকবে

// 👉 2nd check

// 18.5 – 24.9 → Normal

// 👉 না হলে →

// 👉 3rd check

// 25 – 29.9 → Overweight

// 👉 না হলে → Obese

// 📊 Example
// Input:
// weight = 60
// height = 1.6
// Output:
// BMI: 23.44
// Normal

//-----------------------------

// 🔥 Cleaner Version (no nesting)

// 👉 real-world এ এইটা বেশি use হয়:

// if (bmi < 18.5) {
//     console.log("Underweight");
// } else if (bmi <= 24.9) {
//     console.log("Normal");
// } else if (bmi <= 29.9) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }

//******************** PROBLEM 3 ****************** */

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let score = 85;
// if(score >= 90 && score <=100)
// {
//     console.log('Grade A');
// }
// else if(score >=80 && score <= 89)
// {
//     console.log('Grade B');
// }
// else if(score >= 70 && score <= 79)
// {
//     console.log('Grade C');
// }
// else if(score >= 60 && score <= 69)
// {
//     console.log('Grade D');
// }
// else if(score >= 0 && score <= 59)
// {
//     console.log('Grade C');
// }
// else
// {
//     console.log('Invalid Score');
// }
//-----------------------------------------------------------
// 🔥 Cleaner Version (Best Practice)

// 👉 এইটা বেশি smart 👇

// if (score > 100 || score < 0) {
//     console.log("Invalid Score");
// } else if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// 🎯 Short Summary

// 👉 বড় range আগে check করো
// 👉 clean code লিখলে কম condition লাগে

// ********************* PROBLEM 4 ************************
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// ----------------------------------
// let myScore=85;
// let friendScore=75;
// if(myScore>80){
//     if(friendScore>80)
//     {
//         console.log('go for launch');

//     }
//     else if(friendScore <80 && friendScore >= 60 )
//     {
//         console.log('good luck next time');

//     }
//     else if (friendScore < 60 && friendScore >= 40){
//         console.log('message unseen');
//     }
//     else 
//     {
//         console.log('block');
//     }
// }
// else{
//     console.log('go to home and sleep and act sad');
// }

// output
// good luck next time

// ******************** PROBLEM 5 ********************

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
// let num1 = 20;
// let num2 = 15;
// let result;
// if(num1>num2)
// {
//     result = num1 * 2
// }
// else
// {
//     result = num1 + num2;
// }
// console.log(result);

// output
// 40

//---------------------------------
// ternary operator

// let num1 = 20;
// let num2 = 15;
// let result = (num1 > num2 ) ? num1*2 : num1 + num2; 
// console.log(result);

// output : 40

// ******************** PROBLEM 6 ********************
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let age = 20;
// let fare;
// let isStudent = true;
// if(age<10){
//     fare = 0 ;
// }
// else if(isStudent){
//     fare = 800 * 0.5 ;
// }
// else if(age >= 60)
// {
//     fare =  800 * 0.85 ;
// }
// else{
//     fare = 800;
// }

// console.log('Ticket Price:', fare , 'tk');

//-------------------------------------

// ternary operator

// let age = 20;
// let isStudent = true;

// let fare = (age<10)?0
//           :(isStudent)?800*0.5
//           :(age>=60)?800*0.85
//           :800;
// console.log('Ticket Price:', fare , 'tk');          







