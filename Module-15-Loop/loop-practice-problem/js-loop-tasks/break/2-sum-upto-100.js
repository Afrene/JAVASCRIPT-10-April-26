/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let num = 1;
while(true){
    sum = sum + num;
    if(sum >= 100)
    {
        break;
    }
    num++;
}
console.log('final sum:',sum);
console.log('stop at number:', num);

/*********
 * output
 * ----------
 * final sum: 105
   stop at number: 14
 */