// Create a new Map
let myMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['isStudent', false]
]);

// Add entries to the Map
myMap.set('city', 'New York');
myMap.set('country', 'USA');

// Check for keys and get values
console.log(myMap.has('name')); // true
console.log(myMap.get('name')); // John

// Delete an entry
myMap.delete('age');

// Iterate over the Map
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Get the size of the Map
console.log(myMap.size); // 4

// Clear the Map
myMap.clear();
console.log(myMap.size); // 0
