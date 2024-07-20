// Simulated linked list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to simulate fetching a linked list from a database
function fetchLinkedList() {
    return new Promise((resolve, reject) => {
        // Simulating an async database fetch with a delay
        setTimeout(() => {
            // Create a simple linked list: 1 -> 2 -> 3 -> null
            let head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            resolve(head);
        }, 1000);
    });
}

// Convert the linked list to an array
function linkedListToArray(head) {
    let arr = [];
    let currentNode = head;
    while (currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}

// Async function to fetch and process linked list data
async function getData() {
    try {
        let linkedList = await fetchLinkedList();
        let arr = linkedListToArray(linkedList);
        // Perform any operations on the array
        arr = arr.map(value => value * 2); // Example operation: multiply each value by 2
        return arr;
    } catch (error) {
        console.error("Error fetching or processing data:", error.message);
    }
}

// Use the getData function
getData().then(arr => {
    console.log("Processed array:", arr);
});

// Example using setTimeout to simulate delayed usage
setTimeout(async () => {
    let data = await getData();
    console.log("Data after 1 second:", data);
}, 1000);
