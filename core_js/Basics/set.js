// Set
// Unique values:
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(3)
console.log(set)


//set operations
//set has method to verify if set has a value
console.log(set.has(3)) // false

//set size to get size of a set
console.log(set.size)

//itterating over set
for (let obj of set){
  console.log(obj);
}

set.forEach((iteam) => {
  console.log(iteam += 1)
})

console.log(set);

// set clear to clean all set
set.clear();