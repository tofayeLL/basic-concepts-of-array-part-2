

// const numbers = [10, 23, 3, 5, 78, 96, 98, 546, 543, 198];


/* numbers.reverse();
console.log(numbers); */

/* let reversed = numbers.reverse();
console.log(reversed); */



/* ----by using for loop to reverse array----- */
const numbers = [1, 2, 3, 4, 5, 6, 7];
/* let reverse = [];
for(let num of numbers){
    reverse.unshift(num);//unshift use kora hoyese beacuse ekhane normal push use korle same vabe dekhaito reverse korto na unshift use korar karone se ektar samne ektake push korar karone reverse hoiye gese
}
console.log(reverse); */


//another way by use for loop
/*  let reverse = [];
 for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    reverse.unshift(num);

 }
 console.log(reverse); */


 //another way by use for loop ---loop through reverse way

 let reverse = [];
 for(let i = numbers.length-1; i >= 0; i--){
    let num = numbers[i];
    reverse.push(num);
 }
 console.log(reverse);