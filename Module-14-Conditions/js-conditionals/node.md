 Terminal run JS -- type on terminal - node comparision.js
 
 * COMPARISON OPERATOR
 --------------------------
 * 1. bigger: > 
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >= 
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * -------------------
 * 7. and: &&
 * 8. or: ||

 COMPARISION OPERATOR
 ****************************
 greater than or equal: >= 

 console.log(15 >= 10);
🔍 কী হচ্ছে এখানে?

👉 >= মানে greater than or equal to (বড় বা সমান)

15 কি 10 থেকে বড় বা সমান? ✔️ Yes
✅ Output
true
🔥 Logic

👉 15 > 10 → true
👉 তাই পুরো expression → true

💡 Short Summary
>= → বড় বা সমান check করে
condition true হলে → true return করে

*****************
🔍 == (Equality Operator) 

👉 == হলো JavaScript-এর loose equality operator
এটা value compare করে, কিন্তু type ignore করে (type convert করে নেয়)

💻 Example
console.log(5 == 5);     // true
console.log(5 == "5");   // true 😲
console.log(true == 1);  // true 😲

👉 কারণ == আগে type convert করে, তারপর compare করে

⚠️ Important (confusing part)
console.log(0 == false); // true 😲
console.log("" == 0);    // true 😲

👉 JavaScript automatically convert করে

🔥 == vs ===
Operator	Checks	      Example	   Result
==	        value only	    5 == "5"	 true
===	        value + type	5 === "5"	false

💡 Best Practice

👉 === use করা better (bug কম হয়)

🔥 Short Summary
== → value compare করে
type convert করে
confusing হতে পারে
**********************************
console.log(10 == 10.1);
🔍 কী হচ্ছে এখানে?

👉 == operator value compare করে (type same হলে সরাসরি compare)

10 ≠ 10.1
দুটোই number, কিন্তু value different
✅ Output
false
🔥 Logic

👉 10 is not equal to 10.1 → ❌
👉 তাই result → false

💡 Short Summary
== value compare করে
value আলাদা হলে → false

*********************************
console.log(10 === 10.1);
🔍 কী হচ্ছে এখানে?

👉 === (strict equality) check করে:

value ✔️
type ✔️
10 → number
10.1 → number
👉 type same ✔️
👉 কিন্তু value different ❌
✅ Output
false
🔥 Logic

👉 10 ≠ 10.1 → তাই result false

💡 Short Summary
=== → value + type check করে
type same হলেও value আলাদা হলে → false

**************************************
🔍 === (Strict Equality Operator)

👉 === হলো JavaScript-এর strict equality operator
এটা value + type দুটোই compare করে

💻 Example
console.log(5 === 5);     // true
console.log(5 === "5");   // false ❌
console.log(true === 1);  // false ❌
🔥 Key Point

👉 === type convert করে না (strict check)

⚠️ Compare with ==
console.log(5 == "5");   // true 😲
console.log(5 === "5");  // false ✅
📊 Difference
Operator	Checks	Type Conversion
==	value	✔️ yes
===	value + type	❌ no
💡 Best Practice

👉 সবসময় === use করো (safe & recommended)

🔥 Short Summary
=== = strict equality
value + type দুটোই same হতে হবে
best practice

************************************
🔍 != vs !== (JavaScript)

👉 দুটোই not equal (সমান না) check করে, কিন্তু difference হলো type handling 👇

🔹 != (Loose Not Equal)

👉 value compare করে
👉 type convert করে (⚠️ risky)

console.log(5 != "5");   // false 😲 (string → number convert)
console.log(10 != 5);    // true
🔹 !== (Strict Not Equal)

👉 value + type দুটোই compare করে
👉 type convert করে না (✅ safe)

console.log(5 !== "5");  // true ✅ (number vs string)
console.log(10 !== 5);   // true
📊 Difference Table
Operator	Checks	Type Conversion	Example	Result
!=	value	✔️ yes	5 != "5"	false
!==	value + type	❌ no	5 !== "5"	true
🔥 Easy Trick
!= → loose (confusing হতে পারে 😵)
!== → strict (best practice 🔥)
💡 Recommendation

👉 সবসময় !== use করো (bug avoid করার জন্য)

🔥 Short Summary
!= → শুধু value compare
!== → value + type compare

***************************
console.log(0==false); // true

0 == false → true ❗

👉 কারণ:

false → 0 হয়ে যায়
👉 0 == 0 → true

✔ correct: true

console.log(0===false);//false

0 === false → false ✅ 

console.log(null==undefined);//true

null == undefined → true ❗

👉 এটা JS-এর special case
✔ correct: true

console.log(null===undefined);//false
null === undefined → false ✅

console.log("" == 0);//true 
"" == 0 → true ❗
👉 empty string → 0
👉 0 == 0 → true

console.log("" === 0); // false

console.log(false == "0"); // true
false == "0" → true ❗
👉 "0" → 0
👉 false → 0
👉 0 == 0 → true

console.log(false === "0"); // false

//**********************************************

🔥 Important Rule

👉 !== এ:

if (type different) → true
if (value different) → true

👉 শুধু তখনই false হবে:

if (value same AND type same)
🔹 Example 1
console.log(5 !== 5); // false

👉 same type + same value → ❌ not different

🔹 Example 2
console.log(5 !== '5'); // true

👉 type different → ✔️ true

🔹 Example 3
console.log(5 !== 6); // true

👉 value different → ✔️ true

💡 Easy Formula

👉 মনে রাখো:

!==  → (value OR type different) → true
🔥 Short Summary
!== strict comparison
type convert করে না
type আলাদা হলেই → true

<!-- ************************ -->
if - else condition
---------------------------

 if(condition) {
      execute code if condition above is true
    }
     else {
      execute code if the condition is false
  }

  *******************************
MULTIPLE CONDITION
--------------------------
const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
height = 71;

if(salary  > 20000 && height < 66) // 71 < 66 -- false -- both condition should be true
{
    console.log('su-- patro');

}
else{
    console.log('onno patro khuji');
}

💡 Key Learning
---------------
const → change করা যায় না
&& → দুইটাই true হতে হবে
একটা false হলে → পুরো condition false

// -----------ternary operator ------------//
syntax
----------
condition ? value_if_true : value_if_false;

---------------
const age = 112;

// normal if-else
// if(age >=18){
//     console.log('You can vote.')
// }
// else {
//     console.log('Ghumai thako')
// }

// simple ternary
age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')

OPTIONAL: semi-advanced ternary
-------------------------------------

 let price = 500;
 const isLeader = false;

if(isLeader === true){
     if(price > 1000) {
        price = price /2;
    }
    else {
         price = 0;
    }
 }
 else {
     price = price + 1000;
 }

// sample ternary 
--------------------------
let price = 500;
const isLeader = false;

price = isLeader 
    ? (price > 1000 ? price / 2 : 0) 
    : price + 1000;

console.log(price);

output 
---------------
 1500
-------------------------------
🧠 Logic breakdown
-------------------------------

 👉 যদি isLeader = true:

 price > 1000 → half
 না হলে → 0

 👉 যদি isLeader = false:

price + 1000