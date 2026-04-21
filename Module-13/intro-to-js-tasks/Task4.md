### Task-4

What will be the result of the following codes:

**var a = isNaN(‘11’);**


**var a = isNaN(2-10);**

Explain your answers.

isNaN হলো JavaScript-এর একটা function, যা check করে কোনো value NaN (Not a Number) কিনা।

🔹 Basic Syntax
isNaN(value)

👉 return করবে:

true → যদি number না হয়
false → যদি valid number হয়
🔍 Examples
console.log(isNaN(10));        // false (এটা number)
console.log(isNaN("10"));      // false ("10" → number এ convert হয়)
console.log(isNaN("hello"));   // true (number না)
console.log(isNaN(undefined)); // true
console.log(isNaN(NaN));       // true
⚠️ Important (confusing part 😵)

isNaN() আগে value কে number-এ convert করে, তারপর check করে।

isNaN("123")   // false 😲 (string হলেও number বানিয়ে নেয়)
isNaN("")      // false (empty string → 0)
✅ Better Way (Best Practice 🔥)

👉 use করো:

Number.isNaN(value)
Difference:
Number.isNaN("hello") // false ✅ (strict check)
isNaN("hello")        // true ❌ (confusing)
💻 Real Example (input validation)
let input = prompt("Enter a number:");

if (isNaN(input)) {
    console.log("Invalid number ❌");
} else {
    console.log("Valid number ✅");
}
🔥 Pro Tip
isNaN() → loose check
Number.isNaN() → strict & recommended


