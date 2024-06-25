let url = [1, 2, 3, 4, 5];

async function asyncArraySum() {
    let arr = await Promise.resolve(url);
    try {
        // Check if all elements are numbers
        if (!arr.every(element => typeof element === 'number')) {
            throw new Error('Array is corrupted');
        }

        // Calculate the sum of the array
        let sumArray = arr.reduce((total, element) => total + element, 0);
        return sumArray;
    } catch (error) {
        throw new Error("OOPS... Something Went Wrong!!!");
    }
}

asyncArraySum()
    .then(sum => console.log(sum))
    .catch(error => console.error(error.message));
