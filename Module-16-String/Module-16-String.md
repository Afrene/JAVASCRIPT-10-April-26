## :book: similaritics b/w array and string

# array : array count position not a value

``` js
const numbers = [54,98,78,21,65];
console.log(numbers.length); // 5

const num = [54, ,78,21,65,98];
console.log(num.length);//6

console.log(numbers[0]);//54
console.log(numbers[1]);//98

```

# string : string count space not a character

``` js

const capital = 'Dhaka';
console.log(capital.length);//5

const cap = 'D haka';
console.log(cap.length); // 6

console.log(capital[0]);//D
console.log(cap[1]);// nothing print

```

# main difference between array and string

we can update value in array by using index
but we cannot updated value in string by using index

# array

``` js
console.log(numbers);
numbers[1] = 11;
console.log(numbers);

```

# output (value updated)

```
[ 54, 98, 78, 21, 65 ]
[ 54, 11, 78, 21, 65 ]

```
# string

``` js

console.log(capital);
capital[1] = 'F';
console.log(capital);

``` 

# output (value not updated)

``` js

Dhaka 
Dhaka

```

💡 Best practice:

❌ Avoid:

[1, , 3]

✔️ Use:

[1, undefined, 3]

or

[1, null, 3]

সহজভাবে:
empty slot → নেই ❌
undefined → আছে কিন্তু value নাই
null → ইচ্ছা করে empty রাখা

# string is case sensitive

``` js

const school = 'Monipur High School';

const subject = 'Chemistry';
const book = 'chemistry';

if(subject == book){
    console.log('study hard');

}
else{
    console.log('No study');
}

```
# output

```
No study

```
## :book: toUpperCase() and toLowerCase()

``` js
const mySchool = 'Monipur High School';
console.log(mySchool);
console.log(mySchool.toUpperCase());
console.log(mySchool.toLowerCase());

```

#output

```
Monipur High School
MONIPUR HIGH SCHOOL
monipur high school

```

``` js

const myEmail = 'Afrene.Zebeen@gmail.com';
const inputEmail = 'Afrene.zebeen@Gmail.com';

if(myEmail.toLowerCase() === inputEmail.toLowerCase()){
    console.log('Email is correct');
}
else{
    console.log('wrong email');
}

```
# output 

```
Email is correct

```
## :book: trim()
Trim() is used to ignore white space before and after the word

``` js

const drink = 'water';
const inputDrink = ' water';

if(drink.trim()=== inputDrink.trim()){
    console.log('it is water');
}
else{
    console.log('not water');
}

```
#output

```
it is water

```

## :book: slice()

slice(start,end before);

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:--|:--|:--|:--|:--|:--|:--|:--|:--|
| a | n | d | o | r | K | i | l | l |

slice(2,5) = dor

``` js
const address = 'andorKilla';
const part = address.slice(2,5);

console.log(part);

```

# output

```
dor

```

## :book: split()
👉 It breaks a string into an array based on a separator
👉 split() = string ভেঙে array বানানো

💻 Basic syntax:
string.split(separator)
🔹 Example 1 (space দিয়ে split):
``` js
let text = "I love JavaScript";
let result = text.split(" ");

console.log(result);

```

👉 Output:

```
["I", "love", "JavaScript"]

```
🔹 Example 2 (comma দিয়ে split):

``` js
let data = "apple,banana,mango";
let result = data.split(",");

console.log(result);

```
👉 Output:

```
["apple", "banana", "mango"]

```

🔹 Example 3 (each character আলাদা):

``` js
let word = "hello";
let result = word.split("");

console.log(result);

```
👉 Output:

```
["h", "e", "l", "l", "o"]

```
🔹 Example 4 (limit use):

``` js

let text = "a b c d";
let result = text.split(" ", 2);

console.log(result);

```

👉 Output:

```

["a", "b"]

```

🔥 Real use case:

👉 Input → "HTML,CSS,JS"
👉 Output → ["HTML", "CSS", "JS"]

💡 Opposite method:

👉 join() → array → string

``` js

let arr = ["I", "love", "JS"];
console.log(arr.join(" "));

```
👉 Output:

```
I love JS

```
## :book: reverse

``` js
const sentence = 'i am learning Web Dev';

for(const letter of sentence){
    console.log(letter);
}

```

# output

```
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

```

# reverse
donal
d
od
nod
anod
lanod 

``` js

let reverse = '';
for(const letter of sentence){
   reverse = letter + reverse;
}
console.log(reverse);

```

# output

```
veD beW gninrael ma i

```
# code 

``` js
const sentence = 'I am learning Web Dev';

for(let i = 0 ; i < sentence.length ; i++){
    console.log('index-'+ i + ' ' + sentence[i]);
}

```
# output

```
index-0 I
index-1
index-2 a
index-3 m
index-4
index-5 l
index-6 e
index-7 a
index-8 r
index-9 n
index-10 i
index-11 n
index-12 g
index-13
index-14 W
index-15 e
index-16 b
index-17
index-18 D
index-19 e
index-20 v

```

# code

``` js

const sentence = 'I am learning Web Dev';

let reverse = '';
for(let i = 0 ; i < sentence.length ; i++){
    const letter = sentence[i];
    reverse = letter + reverse ;
}
console.log(reverse);

```

# output

```

veD beW gninrael ma I

```

# code

``` js

const sentence = 'I am learning Web Dev';


const reverse = sentence.split('').reverse().join('');
console.log(reverse);

```

# output

```
veD beW gninrael ma I

```


