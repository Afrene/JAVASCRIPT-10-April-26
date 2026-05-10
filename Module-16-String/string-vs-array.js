// similaritics b/w array and string
//-----------------------------------
// array
// array count position not a value
const numbers = [54,98,78,21,65];
console.log(numbers.length); // 5

const num = [54, ,78,21,65,98];
console.log(num.length);//6

console.log(numbers[0]);//54
console.log(numbers[1]);//98

// string
// string count space not a character
const capital = 'Dhaka';
console.log(capital.length);//5

const cap = 'D haka';
console.log(cap.length); // 6

console.log(capital[0]);//D
console.log(cap[1]);// nothing print

// main difference between array and string
//--------------------------------------------

// we can update value in array by using index
// but we cannot updated value in string by using index

// array

console.log(numbers);
numbers[1] = 11;
console.log(numbers);

/* output (value updated)
------------
[ 54, 98, 78, 21, 65 ]
[ 54, 11, 78, 21, 65 ]


*/

//string

console.log(capital);
capital[1] = 'F';
console.log(capital);

/* output (value not updated)
----------
Dhaka 
Dhaka


*/



