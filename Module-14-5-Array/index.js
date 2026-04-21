const numbers = [33,44,21,45,65];
console.log(numbers); // get full array
// to get element value by index
console.log(numbers[0]); // index wise value
const fourth = numbers[3];
console.log(fourth);
// to set or update element value by index
// example
// let abc = 99;
// abc = 44;
numbers[1] = 899;
console.log(numbers);

// output : 
// ------------
// [ 33, 44, 21, 45, 65 ]
// 33
// 45
// [ 33, 899, 21, 45, 65 ]

