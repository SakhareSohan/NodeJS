class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Setter for width
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.log('Width must be positive');
        }
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.log('Height must be positive');
        }
    }

    // Getter for area
    get area() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.width);  // Output: 10
console.log(rect.height); // Output: 5
console.log(rect.area);   // Output: 50

rect.width = 20;
rect.height = 10;
console.log(rect.area);   // Output: 200

rect.width = -5; // Output: Width must be positive
