// Global Scope
let globalVar = "I am a global variable";

function outerFunction() {
    // Function Scope
    let functionVar = "I am a function variable";

    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible

    if (true) {
        // Block Scope
        let blockVar = "I am a block variable";
        const anotherBlockVar = "I am another block variable";
        
        console.log(globalVar); // Accessible
        console.log(functionVar); // Accessible
        console.log(blockVar); // Accessible
        console.log(anotherBlockVar); // Accessible
    }

    // Trying to access block-scoped variables outside the block will cause an error
    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
    // console.log(anotherBlockVar); // Uncaught ReferenceError: anotherBlockVar is not defined
}

outerFunction();

// Trying to access function-scoped variables outside the function will cause an error
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

console.log(globalVar); // Accessible
