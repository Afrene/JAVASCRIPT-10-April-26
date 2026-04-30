

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// subtask - 1

// let sum = 0;
// for(let i = 91; i <= 129; i+=2){
//     console.log(i);
//     sum = sum + i;
// }
// console.log('sum:',sum);

// subtask - 2

let sum = 0;
for(let num = 51; num <= 85; num++){
    if(num % 2 === 0){
        console.log(num);
        sum = sum + num;
    }
}
console.log('total sum:', sum);

/**********
 * output
 * --------
 * 52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
total sum: 1156
 */

// 🧠 Problem:

// 👉 51 থেকে 85 পর্যন্ত even numbers এর sum

// 🔢 Even numbers:

// 👉 52, 54, 56, ..., 84

// 🔍 Quick Math check:
// Step 1: কয়টা সংখ্যা?
// n = ((84 - 52) / 2) + 1
//   = (32 / 2) + 1
//   = 16 + 1
//   = 17
// Step 2: Sum:
// Sum = n × (first + last) / 2
//     = 17 × (52 + 84) / 2
//     = 17 × 136 / 2
//     = 17 × 68
//     = 1156
// ✅ Final Answer:

// 👉 1156 (তোমারটাই ঠিক!) 🎯
