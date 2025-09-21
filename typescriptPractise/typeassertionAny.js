// enum immutable
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
var abc1 = color.red;
console.log(abc1);
// any type
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
// type assertion
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
