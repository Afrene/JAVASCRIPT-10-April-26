const sentence  = 'I am a good and hardworking person';

console.log(sentence.split());

console.log(sentence.split(''));

console.log(sentence.split(' '));

console.log(sentence.split('a'));

/* 
[ 'I am a good and hardworking person' ]
[
  'I', ' ', 'a', 'm', ' ', 'a', ' ',
  'g', 'o', 'o', 'd', ' ', 'a', 'n',
  'd', ' ', 'h', 'a', 'r', 'd', 'w',
  'o', 'r', 'k', 'i', 'n', 'g', ' ',
  'p', 'e', 'r', 's', 'o', 'n'
]
[ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person' ]
[ 'I ', 'm ', ' good ', 'nd h', 'rdworking person' ]
*/

const friendStr = 'Rahim,Karim,lahim,fahim';
const friend = friendStr.split(',');
console.log(friend);

/* 
output
----------
[ 'Rahim', 'Karim', 'lahim', 'fahim' ]


*/