Array:
----------
Enables storing a collection of multiple items under a single variable name

declare array
----------------
const numbers = [12,34,55,56];
const name = ['Abul' , 'kabul', 'babul'];
const isPassed = [true,false,false,true];
const mixedArray = [21 , 'Agrabad' , true, 34.345];

length : how many values in an array

const fruits = ['Mango', 'Apple', 'Orange'];
console.log(fruits.length);
output : 3 ( here 3 values in fruit array )

change array value
------------------------
const fruits = ['Mango', 'Apple', 'Orange'];
fruits[0] = 'Lichi';
console.log(fruits);
output = [ 'Lichi', 'Apple', 'Orange' ]

index
------------
index starts from 0

const numbers = [12,34,54,12,44,34];
index 0 = 12 
index 1 = 34
index 2 = 54
index 3 = 12
index 4 = 44
index 5 = 34

------------------------------------
const numbers = [33,44,21,45,65];
console.log(numbers); // get full array
console.log(numbers[0]); // index wise value
const fourth = numbers[3];
console.log(fourth);

// output : 
// ------------
// [ 33, 44, 21, 45, 65 ]
// 33
// 45


----------------------------------------

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

-------------------------------------------

push pop method
---------------
const numbers = [ 34, 4,23,45,22];
console.log(numbers);
numbers.push(90);
console.log(numbers);

output
--------------
[ 34, 4, 23, 45, 22 ]
[ 34, 4, 23, 45, 22, 90 ]

----------------------------------
***push() method add to new element to the end of an array

const friends = ['balam', 'kalam','salam'];
friends.push('malam');
console.log(friends);

output : [ 'balam', 'kalam', 'salam', 'malam' ]

------------------------------------------

pop() - remove last element from an array

const friends = ['balam', 'kalam','salam'];
friends.pop();
console.log(friends);

output : [ 'balam', 'kalam' ]

---------------------------------------
Shift and Unshift function
--------------------------------------
***shift removes element from start an array and return it

const friends = ['balam', 'kalam','salam'];
friends.shift();
console.log(friends);

output : [ 'kalam', 'salam' ]

-----------------------------------------------
unshift() - insert element of start of an array
------------------------------------------------
const friends = ['balam', 'kalam','salam'];
console.log(friends);
friends.unshift('hello');
console.log(friends);

output
------------
 [ 'balam', 'kalam', 'salam' ]
 [ 'hello', 'balam', 'kalam', 'salam' ]

 ---------------------------------------------------------------
 includes() - check element whether it is present in an arry and it is case sensitive
 ---------------------------------------------------------------
 const friends = ['balam', 'kalam','salam'];
 console.log(friends.includes('balam'));

outout : true
--------------------------------------------
indexOf() - to find index from an array
---------------------------------------------

const weather = ['rainy','sunny'];
console.log(weather.indexOf('sunny'));

output : 1

----------------
const weather = ['rainy','sunny'];
console.log(weather.indexOf('funny'));

output: -1

----------------------------------------------------
isArray() - check whether it is array or not
----------------------------------------------------
const weather = ['rainy','sunny'];
const num = [];
const food = 'ros o llo gol la';

console.log(Array.isArray(weather));
console.log(Array.isArray(num));
console.log(Array.isArray(food));

output
------------
true
true
false

---------------------------------------
join()
-----------------------------------------

-----------------------------------------
concat() - join two array
-----------------------------------------

-----------------------------------------
slice() - divide array into pieces
-----------------------------------------
const fruits = ['apple', 'orange', 'mango','lichi'];
console.log(fruits.slice(2,4)); // index 2 to index 3

output : [ 'mango', 'lichi' ] 

--------------------------------------
splice()
-------------------------------------


