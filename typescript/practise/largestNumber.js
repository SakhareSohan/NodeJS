function findLargestNumber(arr) {
    var max = arr[0]; // assuming this is the largest
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var arr1 = [];
arr1.push(1, 4, 2, 6, 8, 9, 43, 6, 1, 10, 2);
console.log(findLargestNumber(arr1));
