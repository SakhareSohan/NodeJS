let arr1 = new Array();
let arr2 = new Array();

arr1 = [1,2,3,4,5,6,7,8,9]
arr2 = [9,8,7,6,5,4,3,2,1]

let new_map = new Map();

for (i = 0; i < arr1.length; i++){
  for (j = 0; j < arr2.length; j++){
      new_map.set(arr1[i], arr2[j]);
    }
  }

console.log(new_map);

let map_map = new Map(arr1.map((value, index) => {
  if (value > 5){
    return [index,value];
    };
  }
).filter(entry => entry !== undefined));

console.log(map_map);

let new_arr3 = Array.from(map_map);
console.log(new_arr3);

console.log(new_arr3.map(value => value[1]));