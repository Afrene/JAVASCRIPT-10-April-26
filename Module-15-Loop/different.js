// for(let i = 0; i<=20;i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// or
// for(let i = 0; i<=20;i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

//or
// for(let i = 1; i<=20;i+=2){
    
//     console.log(i);
   
// }


/***
 * output
   -------
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
 */

// give the list of numbers from 1 to 30 divisible by 5

// for(let i = 1 ; i <= 30 ; i++)
// {
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

/*****
 * output
-----------
5
10
15
20
25
30
 */

// for(let i = 1 ; i <= 30 ; i++)
// {
//     if(i % 5 === 0 || i % 3 === 0){
//         console.log(i);
//     }
// }

/********
 * output
 * -------
 *  3
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
 */

// for(let i = 1 ; i <= 30 ; i++)
// {
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// } 

/**
 * output
 * ------
 * 15
   30   
 */

// give me the sume of numbers from 1 to 20 that are divisible by 3

let sum = 0;
for(let i = 1; i <= 20 ; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
        //console.log(sum);
    }

}
console.log('Sum:',sum);

/****
 * output
 * ----------
 *  3
    6
    9
    12
    15
    18
    Sum: 63
 */