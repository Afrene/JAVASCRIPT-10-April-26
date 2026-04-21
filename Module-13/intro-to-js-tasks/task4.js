var a = isNaN('11');
console.log(a);

var ab = isNaN(2-10);
console.log(ab);


// --------------------------------------------------

// true → যদি number না হয়
// false → যদি valid number হয়

// 👉 এখানে কী হবে step by step দেখি:

// 🔍 Explanation
// '11' একটা string
// isNaN() আগে এটাকে number এ convert করে → 11
// 11 একটা valid number

// 👉 তাই isNaN('11') return করবে false
// --------------------------------------------

// var ab = isNaN(2 - 10);
// 🔍 Step by step
// আগে calculate হবে:
// 👉 2 - 10 = -8
// -8 একটা valid number

// 👉 তাই:

// isNaN(-8) // false
// ✅ Final Output
// console.log(ab); // false
// 🔥 Logic

// 👉 -8 → number → NaN না → false