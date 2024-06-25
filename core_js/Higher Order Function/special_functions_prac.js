let map = new Map();
map.set('a', 1);
console.log(map.get('a'));

let arr = new Array();
arr.push(9, 1, 1, 2, 3, 4);
console.log(arr[3]);

let min = (() => {
  let min = arr[0]
  for (i of arr){
    if (i < min){
      min = i;
    }
  }
  return min;
})();
console.log(min)

// let min_for = arr.forEach((element) => {
//   let sum1 = sum(arr);
//   let per = element / sum1;
//   console.log('volla element found', per);
// });

console.log('reduce', arr.reduce(function(a, b){ 
  return a + b ;
}));

console.log('filter', arr.filter(function(a, b){ 
  return a = b ;
}));

console.log(arr.forEach((a, b) => { 
  return a + 2;
}), 0);

console.log('Mixing magic',arr.map((a, b) => {
  return a*arr.reduce((a, b) => {
    return a * b;
  })
}))
