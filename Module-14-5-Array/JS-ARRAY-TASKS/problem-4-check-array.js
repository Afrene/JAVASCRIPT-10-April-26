// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.

let num = 12;
let char = 'A';
const numbers = [2,4,5,6];
const food = ['burger','pizza','cake'];
const mixed = ['flowers',123,0.56];
const emptyArray = [];

console.log(Array.isArray(num));
console.log(Array.isArray(char));
console.log(Array.isArray(numbers));
console.log(Array.isArray(food));
console.log(Array.isArray(mixed));
console.log(Array.isArray(emptyArray));

if(Array.isArray(num)){
    console.log('num is an Array');
}
else{
    console.log('num  is not an Array');
}

if(Array.isArray(char)){
    console.log('char is an Array');
}
else{
    console.log('char  is not an Array');
}

if(Array.isArray(numbers)){
    console.log('numbers is an Array');
}
else{
    console.log('numbers  is not an Array');
}

if(Array.isArray(food)){
    console.log('food is an Array');
}
else{
    console.log('food  is not an Array');
}

if(Array.isArray(mixed)){
    console.log('mixed is an Array');
}
else{
    console.log('mixed  is not an Array');
}

if(Array.isArray(emptyArray)){
    console.log('emptyArray is an Array');
}
else{
    console.log('emptyArray  is not an Array');
}

// output
// ---------
// false
// false
// true
// true
// true
// true
// num  is not an Array
// char  is not an Array
// numbers is an Array
// food is an Array
// mixed is an Array
// emptyArray is an Array
