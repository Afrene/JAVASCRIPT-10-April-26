// ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().

const food = ['burger','pizza','coke'];
const numbers = [2,34,54,66];
const result = food.concat(numbers);
console.log(food);
console.log(numbers);
console.log(result);

// output
// -----------
// [ 'burger', 'pizza', 'coke' ]
// [ 2, 34, 54, 66 ]
// [ 'burger', 'pizza', 'coke', 2, 34, 54, 66 ]