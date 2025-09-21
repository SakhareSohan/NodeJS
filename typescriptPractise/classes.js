// classes
var abc2 = /** @class */ (function () {
    function abc2(name, classes, id) {
        this.name = name;
        this.classes = classes;
        this.id = id;
    }
    abc2.prototype.prt2 = function () {
        console.log("data stored are name ".concat(this.name, " classes ").concat(this.classes, " id ").concat(this.id));
    };
    return abc2;
}());
var obj1 = new abc2('sohan', 'Be4', 59);
obj1.prt2();
