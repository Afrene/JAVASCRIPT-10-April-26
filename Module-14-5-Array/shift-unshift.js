// shift removes element from start an array and return it

// const friends = ['balam', 'kalam','salam'];
// friends.shift();
// console.log(friends);

// output : [ 'kalam', 'salam' ]

//--------------------------------------
const friends = ['balam', 'kalam','salam'];
console.log(friends);
friends.unshift('hello');
console.log(friends);

// output
// ------------
// [ 'balam', 'kalam', 'salam' ]
// [ 'hello', 'balam', 'kalam', 'salam' ]