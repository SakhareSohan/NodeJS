let arr = new Array();
arr.push(51,52,33,24,75,86,97,8,90,8,74,64,5,74,39,23,15);

//Array operations
//insertion occures using push here

//Searching and Elemnet and retriving its index
let index = arr.map((x, y) => {  // map index and remaining with -1
    if (x == 75){
        return y;
    } else{
        return -1;
    }
}).filter(x => x !== -1); //filter out elements

console.log(index);

//same code with ternary opperatore
//Searching and Elemnet and retriving its index
let index1 = arr.map((x, y) => x == 75 ? y : -1).filter(x => x !== -1); // ternernary operator can not have curly braces and ? if statement and : else statement
// Using reduce to find the index of 75
let index2 = arr.reduce((acc, curr, i) => {
    return (curr === 75 && acc === -1) ? i : acc;
}, -1);

//insert at given index
let a = 0;
let index3 = 3;
arr.splice(index, 0, a);
console.log(arr);

