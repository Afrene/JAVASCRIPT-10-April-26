const sentence = 'i am learning Web Dev';

/* for(const letter of sentence){
    console.log(letter);
}
 */
/* 
output
--------
i

a
m

l
e
a
r
n
i
n
g

W
e
b

D
e
v
*/

/*
reverse
-------------
donal
d
od
nod
anod
lanod 
 */

let reverse = '';
for(const letter of sentence){
   reverse = letter + reverse;
}
console.log(reverse);

/* 
output
-----------
veD beW gninrael ma i

*/