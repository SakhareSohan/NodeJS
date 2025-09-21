const counter = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        value: function() {
            return count;
        }
    };
})();

console.log(counter.increment()); // Output: 1
console.log(counter.decrement()); // Output: 0
console.log(counter.value());     // Output: 0
