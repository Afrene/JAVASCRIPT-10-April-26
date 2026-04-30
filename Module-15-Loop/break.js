// for(let i = 0 ; i < 15;i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }

/*******
 * output
 * ---------
 *  0
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
 */

// for(let i = 0 ; i < 15;i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }  

//console.log('life after break up');

/****
 * output
 * ---------
 *  0
    1
    2
    3
    4
    5
    life after break up
 */

// let num = 54;
// while(num > 25){
//     console.log(num);
//     if(num < 50){
//       break;
//     }
//     num--;
// }  

/*****
 * output
 * ------
 * 54
   53
   52
   51
   50
   49
 */

let num = 54;
while(num > 25){
    
    if(num < 50){
      break;
    }
    console.log(num);
    num--;
}  

/**********
 * output
 * -------
 * 54
   53
   52
   51
   50
 */