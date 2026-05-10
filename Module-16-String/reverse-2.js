const sentence = 'I am learning Web Dev';

let reverse = '';
for(let i = 0 ; i < sentence.length ; i++){
    const letter = sentence[i];
    reverse = letter + reverse ;
}
console.log(reverse);

/* 
output
-----------
veD beW gninrael ma I


*/