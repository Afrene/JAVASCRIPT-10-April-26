// for(let i = 1 ; i <= 10;i++)
// {
//     if(i % 2 === 1){
//        continue;
//     }
//     console.log(i);
// }

/*******
 * output
 * --------
 *  2
    4
    6
    8
    10
 */

 let num = 0;
 while(num < 50){
    num++;
    if(num % 5 !== 0){
        continue;
    }
    console.log(num);
    
 }  
