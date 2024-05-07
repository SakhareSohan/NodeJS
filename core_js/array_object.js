let arr = new Array(); // new array declaration
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

arr.unshift(50);
let new_arr = []; // new array declarations

new_arr.push(60,70,80);
new_arr = arr.concat(new_arr);
console.log(new_arr)