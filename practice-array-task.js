
/* ----practice task one---- */
/* question: Write a JavaScript code to reverse the array colors without using the reverse method. */
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reverse = [];
/* for(i = 0; i < colors.length; i++){
    let color = colors[i];
    reverse.unshift(color);
}
console.log(reverse); */

// another way
/* for(let color of colors){
    // console.log(color);
    reverse.unshift(color);
}
console.log(reverse); */

// another way
/* for(let i = colors.length-1; i >= 0; i--){
    // console.log(colors[i]);
    let color = colors[i];
    reverse.push(color);

}
console.log(reverse); */


/* -----practice task two---- */
/* question: Write a JavaScript code to get the even numbers from an array using any looping technique. */
/* const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = []
for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num % 2 === 0){
        even.push(num);
    }
}
console.log(even); */


/* ----practice task three------ */
/* question: Use a for...of loop to concatenate all the elements of an array into a single string. */
/* var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var str = numbers.join('');
console.log(str);
 */



/* ---practice task four --- */
/* question: Reverse the words of a sentence. Only the position of the word will be reversed. check out the output */
const statement = 'I am a hard working person';
let reverse = [];
let convertArray = statement.split(' ');

for(let i = 0; i < convertArray.length; i++){
    
    word = convertArray[i];
    reverse.unshift(word);
}
let convertStr = reverse.join(' ');
console.log(convertStr);

