// string case sensitive

const school = 'Monipur High School';

const subject = 'Chemistry';
const book = 'chemistry';

if(subject == book){
    console.log('study hard');

}
else{
    console.log('No study');
}

/* 
output
----------
No study

*/

const mySchool = 'Monipur High School';
console.log(mySchool);
console.log(mySchool.toUpperCase());
console.log(mySchool.toLowerCase());

/* 
output
---------
Monipur High School
MONIPUR HIGH SCHOOL
monipur high school


*/

const myEmail = 'Afrene.Zebeen@gmail.com';
const inputEmail = 'Afrene.zebeen@Gmail.com';

if(myEmail.toLowerCase() === inputEmail.toLowerCase()){
    console.log('Email is correct');
}
else{
    console.log('wrong email');
}

/* 
output
-----------
Email is correct
*/


//****************** */

const drink = 'water';
const inputDrink = ' water';

//Trim() is used to ignore white space before and after the word
if(drink.trim()=== inputDrink.trim()){
    console.log('it is water');
}
else{
    console.log('not water');
}

/* 
output
-----------
it is water

*/

