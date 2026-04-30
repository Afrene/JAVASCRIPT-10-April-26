// print revers from 50 to 1 

// let num = 50;
// while(num >= 1){
//     console.log(num);
//     num--;
// }

// Find the sum of numbers from 10 to 100 that are divisible by both 3 and 5.
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

// output

// 15
// 30
// 45
// 60
// 75
// 90
// Total Sum: 315
