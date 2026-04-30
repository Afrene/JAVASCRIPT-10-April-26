### :rocket: JS LOOP TASK

## :book: While loop

# :bulb: Practice task 1

I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

``` js

let count = 1;
while(count<=60){
    console.log('I will invest at least 6 hrs for study');
    count++;
}

```
# :bulb: ODD / EVEN Loop

Subtask-1:

Find all the odd numbers from 61 to 100.

``` js

let num = 61;
while(num<=100){
    if(num % 2 == 1){
        console.log(num);
        
    }
    num++;
}

```
Subtask-2:

Find all the even numbers from 78 to 98.

``` js

let num = 78;
while(num <= 100){
    if(num % 2 == 0){
     console.log(num);
    }
    
    num++;
}

```
# :book: some of odd numbers

Subtask-1:

Display sum of all the odd numbers from 

``` js

let num = 81;
let sum = 0;
while(num<=131){
    if(num % 2 == 1){
        sum=sum+num;
    }
    
    num++;
}
console.log('sum of odd numbers:',sum);

```
# output

```
sum of odd numbers: 2756

```

Subtask-2:

Display sum of all the even numbers from 206 to 311.

``` js

let num = 206;
let sum = 0;
while(num <= 311){
    if(num % 2 == 0){
        sum += num;
    }
    num++;
}
console.log('sum of even numbers:',sum);

```
# output

```
sum of even numbers: 13674

```

🔢 Math দিয়ে check করি (easy trick):

Even numbers:
👉 206, 208, 210, ..., 310

Step 1: কয়টা number আছে?
n = ((310 - 206) / 2) + 1
  = (104 / 2) + 1
  = 52 + 1
  = 53
Step 2: Sum:
Sum = n × (first + last) / 2
    = 53 × (206 + 310) / 2
    = 53 × 516 / 2
    = 53 × 258
    = 13674
✅ Final Answer:

👉 13674 🎯

# :bulb: reverse number

Subtask - 1
print revers from 50 to 1 

``` js

let num = 50;
while(num >= 1){
    console.log(num);
    num--;
}

```
Find the sum of numbers from 10 to 100 that are divisible by both 3 and 5.

``` js

let num = 10;
let sum = 0;
while(num <= 100){
    if((num % 3 == 0) && (num % 5 == 0)) {
        console.log(num);
        sum += num;
    }
    
    num++;
}
console.log('Total Sum:', sum);

```

# output

```

15
30
45
60
75
90
Total Sum: 315

```

# :bulb: Pratice 4
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

``` js
let num = 5;
let i = 1;
while(i<=10){
    console.log(num + 'x' + i + '=' + (num*i));
    i++;
}

```
# output

``` 
5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
5x10=50

``` 

# :bulb: practice 5
Implement a countdown timer that counts down from 21 to 15.

``` js
let count = 21;
while(count >= 15){
    console.log(count);
    count--;
}

```
# output

``` 
20
19
18
17
16
15

```

