let attendance = [1, 1, 1, 0.5, 1, 0, 0, 1];

console.log(wages(attendance));

console.log(attendance.forEach((item) => {
  if (item > 0.5 && (item != undefined)){
    console.log(item);
  };  
}));

console.log(attendance.filter(item => item > 0.5))
console.log(attendance.map(item => item * 2))
console.log(attendance.reduce((collect,init) => collect + init, 0))
console.log(attendance)