// object 
// this is not meant to be used as class but rather to be used for object defining
// [] defined that it is an array but if there is a tuple or fixed size then mentoned [datatype]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var obj = {
    id: 123,
    name: 'foo',
};
console.log(obj);
// arrays 
var arr = [1, 2, 3, 4];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var arr4 = [1, 'a', 'b', 'c', 'd', 'e', 5];
var arr3 = __spreadArray(__spreadArray([], arr2, true), arr, true);
console.log(arr3);
var lst = [2, 'a']; // only given parameters are allowed
// tuples 
var tuple = [1, 'z', 4, true];
//hetrogeneous type
var finalType = __spreadArray(__spreadArray(__spreadArray([2, 'a'], arr4, true), arr2, true), tuple, true); // type is written
console.log(finalType);
