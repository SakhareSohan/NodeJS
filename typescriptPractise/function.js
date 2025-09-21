// Normal function 
function abc() {
    console.log('abc');
}
console.log(typeof abc);
abc();
// Anonomous function
var ab = function () {
    console.log('ab');
};
console.log(typeof ab);
ab();
// Arrow function
var arrow = function () {
    console.log('arrow');
};
console.log(typeof arrow);
arrow();
// Arrow function IIFE
var ba = (function () {
    var nw = 'hello world';
    return nw;
})();
console.log(typeof ba);
console.log(ba);
/*
function declaration is used as a function with its return data type
if more specific is needed then we will use arrow functionto define parameter as a function is a functionin ts.

*/ 
