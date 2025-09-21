// variable's and scope
let a = 10;
const b = 20;
var f = 60;
console.log(a, b, f);
function add(){
  let c = 30;
  const d = 40;
  var e = 50;
  g = 10; // global
  console.log(a, b, c, d, e, f);
}
add()
console.log(a, b, f, g);

// output:
//10 20 60
//10 20 30 40 50 60
//10 20 60 10