function reverseString(str) {
    var n = str.length;
    var result = '';
    for (var i = n - 1; i >= 0; i--) {
        result += str[i]; // Use the += operator to concatenate each character
    }
    return result;
}
var aba = "hello";
console.log(reverseString(aba)); // Output should be "olleh"
