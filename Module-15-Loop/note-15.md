# Module 15 Loop

## variable 

const = cannot change
let = can change
ver = should not use


### :book: for of loop

## :brain: code -1 
``` js

const numbers = [12,98,45,63,21,72];

for ( const num of numbers){
    console.log(num);
}

```

## output
-----------
```
12
98
45
63
21
72

```

## :brain: code 2

``` js
const fruits = ['orange', 'apple', 'banana', 'jackfruit','watermelon'];

for(const fruit of fruits){
    console.log(fruit);
}

```
## output
```
output
----------
apple
banana
jackfruit
watermelon

```

### :rocket: Practice for of loop

## :book: Practice 1

# :bulb: print subjects name

``` js

const subjects = ['Math', 'Physics','Chemistry','Bangla','English'];

for(const subject of subjects){
    console.log(subject);
}

```
## output

```
const subjects = ['Math', 'Physics','Chemistry','Bangla','English'];

for(const subject of subjects){
    console.log(subject);
}

```

## :book: Practice 2

# :bulb: print foods name

``` js

const foods = ['Burger', 'Pizza', 'Coke', 'Beef'];

for(const food of foods){
    console.log(food);
}

```

## output

```
Burger
Pizza
Coke
Beef

```

## :book: Practice 3
# :bulb: DOB of Family members and print each family member's DOB

``` js

const membersDOB = ['12 June', '23 August', '15 january','23 April'];

for(const memberDOB of membersDOB){
    console.log(memberDOB);
}

```

## output

```
12 June
23 August
15 january
23 April

```

## :rocket: rules

* num = num + 1 or num += 1 or num++

### :rocket: While Loop

## :brain: Syntax

loop vairable declare ;
while(loop condition){
   repitive  task ;
   change the value of the loop variable;
}

# :bulb: example

``` js

let num = 0;
while(num < 5){
    console.log('looping',num);
    num = num + 1 ; 
}

```

# output

```

looping 0
looping 1
looping 2
looping 3
looping 4

```

## :brain: code 1

``` js

let num = 1;
while(num <=10){
    console.log(num);
    num++;
}

```

## output

``` 

let num = 1;
while(num <=10){
    console.log(num);
    num++;
}

```

## :brain: code 2 : sum numbers

``` js 

let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    sum = sum + num ;
    console.log('sum:',sum);
    num++;
}
console.log('Total Sum:', sum);

```

## output

```
1
sum: 1
2
sum: 3
3
sum: 6
4
sum: 10
5
sum: 15
6
sum: 21
7
sum: 28
8
sum: 36
9
sum: 45
10
sum: 55
Total Sum: 55

```

## :book: code 3
# print numbers from 1 to 10

``` js

let num = 1;
while(num < 10){
    console.log(num);
    num++;
}

```

## output

```

1
2
3
4
5
6
7
8
9

```
# :bulb: why print until 9 , why not it is print until 10
because i give condition (num < 10 ) , if i want to print until 10 then we have give condition (num <= 10)

## :book: code 4
# :bulb: Print numbers from 50 to 100

``` js

let num = 50;
while(num <= 100){
    console.log(num);
    num++;
}

```

## :book: code 5
# print numbers from 1 to 10 and print total sum of numbers

``` js

let num = 1;
let sum = 0;

while(num <= 10){
    sum = sum + num;
    num++;
}
console.log('sum of total numbers;', sum);

```

## output

```
sum of total numbers; 55

```

## :book: Code 6
# Print even numbers from 1 to 10

let num = 1;
while(num < 10){
    console.log(num);
    if(num % 2 === 0){
        console.log('even number:', num);
    }
    num++;
}

### :rocket: for loop
## :book: for loop syntax

for loop syntax

```
for(loop variable declaration;loop condition ; increment / decrement){
} 

```
## :book: js code

``` js
for(let num = 1; num<=10;num++)
{
    console.log(num);
}

```
# output

``` 
1
2
3
4
5
6
7
8
9
10

```

## :book: even number

``` js

for(let i = 0 ; i<=20;i=i+2){
    console.log('even nmubers:',i);
}

```

# output

```

even nmubers: 0
even nmubers: 2
even nmubers: 4
even nmubers: 6
even nmubers: 8
even nmubers: 10
even nmubers: 12
even nmubers: 14
even nmubers: 16
even nmubers: 18
even nmubers: 20

```
## :book: odd number

``` js
for(let i = 1; i<= 20; i=i+2){
    console.log('odd number:',i);
}

```

# output

``` 

odd number: 1
odd number: 3
odd number: 5
odd number: 7
odd number: 9
odd number: 11
odd number: 13
odd number: 15
odd number: 17
odd number: 19

```

## :book: sum of numbers (for loop)

``` js
let sum = 0;
for(let i = 11 ; i<=20; i++){
    sum = sum + i;

}
console.log("sum of numbers from 11 to 20 is ",sum);

```

## output

```
sum of numbers from 11 to 20 is  155

```

## :book: reverse for loop

``` js

let sum = 0;
for(let i = 11 ; i<=20; i++){
    sum = sum + i;

}
console.log("sum of numbers from 11 to 20 is ",sum);

```

# output

```
sum of numbers from 11 to 20 is  155

```

## :book: decremental while loop

``` js
let i = 10;
while(i>=0){
    console.log(i);
    i--;
}

```
# output

```

10
9
8
7
6
5
4
3
2
1
0

```

## :bulb: Even number rule
```
number % 2 === 0
or
number % 2 !== 1
```
## :bulb: Odd number rule
```
number % 2 === 1 
or
number % 2 !== 0
```

## :bulb: odd numbers

``` js
for(let i = 0; i<=20;i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

```
## OR

``` js

for(let i = 0; i<=20;i++){
     if(i % 2 === 1){
         console.log(i);
     }
 }

```
## OR

``` js

for(let i = 1; i<=20;i+=2){
    
    console.log(i);
   
}

```

# output
```
    1
    3
    5
    7
    9
    11
    13
    15
    17
    19
```

## :book: give the list of numbers from 1 to 30 divisible by 5

``` js

for(let i = 1 ; i <= 30 ; i++)
{
    if(i % 5 === 0){
        console.log(i);
    }
}

```

# output

```
5
10
15
20
25
30

```

## :book:divisible by 3 or 5

``` js

for(let i = 1 ; i <= 30 ; i++)
 {
     if(i % 5 === 0 || i % 3 === 0){
         console.log(i);
     }
 }

``` 

# output

```
    3
    5
    6
    9
    10
    12
    15
    18
    20
    21
    24
    25
    27
    30
```
## :book: divisible by 3 and 5

``` js

for(let i = 1 ; i <= 30 ; i++)
{
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
} 

```
# output

```
   15
   30  

```

## :book: give me the sume of numbers from 1 to 20 that are divisible by 3

``` js

let sum = 0;
for(let i = 1; i <= 20 ; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
        //console.log(sum);
    }

}
console.log('Sum:',sum);

```

# output

```  
    3
    6
    9
    12
    15
    18
    Sum: 63

```

### :rocket: break

``` js

for(let i = 0 ; i < 15;i++){
    console.log(i);
    if(i>10){
        break;
    }
}
```

# output

```  
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11

```

## :book: break code 2

``` js

for(let i = 0 ; i < 15;i++){
    console.log(i);
    if(i>=5){
        break;
    }
}  

console.log('life after break up');

```

# output

 ``` 

    0
    1
    2
    3
    4
    5
    life after break up
 
 ```

 ## :book: break code 3

``` js
let num = 54;
while(num > 25){
    console.log(num);
    if(num < 50){
      break;
    }
    num--;
}  

```

# output

```

   54
   53
   52
   51
   50
   49

```

## :book: break code 4

``` js

let num = 54;
while(num > 25){
    
    if(num < 50){
      break;
    }
    console.log(num);
    num--;
}  

```
# output

```

   54
   53
   52
   51
   50

``` 

# break : stop the loop
# continue : skip the loop

### :rocket: continue

``` js

for(let i = 1 ; i <= 10;i++)
{
    if(i % 2 === 1){
       continue;
    }
    console.log(i);
}

```

# output

```

 *  2
    4
    6
    8
    10
 
```

### :rocket: do while loop

``` js

let num = 0;
do{
    console.log(num);
    num++;
}
while(num <= 10)

```

### :rocket: Summary

# variable 

const = cannot change
let = can change
ver = should not use

1. forof()
``` js

const numbers = [12,98,45,63,21,72];

for ( const num of numbers){
    console.log(num);
}

```
2. while loop
``` js

let num = 0;
while(num < 5){
    console.log('looping',num);
    num = num + 1 ; 
}

```
most of the cases , it uses loading issue, login etc rather than number

3. for loop

``` js

for(let i = 1 ; i <= 30 ; i++)
{
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
} 

```
use : when the number of iteration is known

4. break : stop the loop
``` js

let num = 54;
while(num > 25){
    
    if(num < 50){
      break;
    }
    console.log(num);
    num--;
}  

```

5. continue : skip the loop

``` js

for(let i = 1 ; i <= 10;i++)
{
    if(i % 2 === 1){
       continue;
    }
    console.log(i);
}

```

## :book: while loop vs do while loop
🧠 Explanation:
🔹 while loop:
আগে condition check করে
তারপর code run করে
let i = 1;

while (i > 5) {
    console.log(i);
}

👉 এখানে condition false → একবারও run হবে না

🔹 do...while loop:
আগে code run করে
তারপর condition check করে
let i = 1;

do {
    console.log(i);
} while (i > 5);

👉 condition false হলেও → একবার run হবেই ✅

🔥 Key Difference:
while → 0 times run হতে পারে
do...while → কমপক্ষে 1 বার run হবেই
🇧🇩 সহজভাবে:

👉 while → আগে check
👉 do while → আগে run, পরে check


