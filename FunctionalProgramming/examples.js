/*
Functional Programming is a style of programming that involves
writing pure functions. Pure Functions are functions with no hidden input
or outputs therefore reducing unwanted side effects.

What makes JS functional?
It treats functions as object (first class functions). Functions can be saved 
as variables. Functions can be passed as inputs to function and functions can return  functions. F

*/


/*In-built JS Examples */

/* Map - takes a function and applies to each items in array and returns 
a new array with results of modiefied array*/
var resAfterSqrt = [ 25 , 16 , 36].map(Math.sqrt);
console.log(resAfterSqrt);


/* Filter - takes a function as parameter as creates new array with only elements
that meet condition stated in function passed in*/
var even =[ 5, 2, 9, 7, 6,1].filter(function(x){ return (x % 2) ===0 });
console.log(even);

/* Every - takes a function as parameter and returns true if each element in array 
meets condition stated in function passed in)*/
var allEven =[ 5, 2, 9, 7, 6,1].every(function(x){ return (x % 2) ===0 });
console.log(allEven);
allEven =[  2, 6 , 4 , 8].every(function(x){ return (x % 2) ===0 });
console.log(allEven);

/* Reduce - takes an array and reduces to single value */
var sumOfAll = [ 3 , 2 , 5 ].reduce(function(x, y){return x + y});
console.log(sumOfAll);


Other methods include:  reduceRight, forEach, some, sort