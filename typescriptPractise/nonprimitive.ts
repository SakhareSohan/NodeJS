// object 
// this is not meant to be used as class but rather to be used for object defining
// [] defined that it is an array but if there is a tuple or fixed size then mentoned [datatype]


interface abc{
    id: number,
    name: string
}

let obj: abc = {
    id: 123,
    name: 'foo',
}
console.log(obj);


// arrays 
let arr: number[] = [1, 2, 3, 4];
let arr2: string[] = ['a', 'b', 'c', 'd', 'e'];
let arr4: (number | string)[] = [1,'a', 'b', 'c', 'd', 'e', 5];
let arr3: (number | string)[] = [...arr2, ...arr];

console.log(arr3);

// type is used to have a defined type of pattern array
type Lst = [number, string];
let lst: Lst = [2, 'a']; // only given parameters are allowed


// tuples 
let tuple: [number, string, number, boolean] = [1, 'z', 4, true];

//hetrogeneous type
let finalType: [...Lst, ...(number | string | boolean)[]] = [2, 'a', ...arr4, ...arr2, ...tuple]; // type is written

console.log(finalType);