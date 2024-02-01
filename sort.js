/* const person = ['akib', 'rakib', 'nokib', 'bokib', 'dakib', 'pakib'];
let sortedPerson = person.sort();
console.log(sortedPerson); */


/* ----sort----- */
// const numbers = [2, 5, 6, 7, 1, 9];
/* 
*ascending ---> smaller to larger ==[1,2,5,6,7,9]
*descending---> larger to smaller ==[9,7,6,5,2,1]
*/
const numbers = [2, 5, 6, 67, 1, 29, 45];
// const num_asc = numbers.sort();//not working properly because java check only first letter if we declare like this
// so we can call function with sort

let num_asc = numbers.sort(function (a, b)  { return a - b});//ascending 
let num_dsc = numbers.sort( function (a, b) { return b - a});//descending
console.log(num_asc);
console.log(num_dsc);