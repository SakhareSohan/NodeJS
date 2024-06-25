// Problem: Filtering and Processing Data with Async Operations
// Requirements:
// You are tasked with building a data processing system that does the following:

// Data Fetching:

// Fetch data from a remote API endpoint asynchronously using fetch().
// Data Filtering and Mapping:

// Filter the fetched data to get only numbers.
// Map each number to its square.
// Use asynchronous operations (async/await and Promises) appropriately.
let sample_arr = [1,2,4,6,8,'hello','nan', 0]
async function dataFetch(){
  let arr = sample_arr;
  let filterArray = arr.filter((element, index) => typeof element == 'number');
  return filterArray;
}
let promise = dataFetch().then((arr)=>(arr.map((element, index) => element * element ))).catch((e) => console.log(e.message));

setTimeout((function(){
 console.log(promise); 
}), 5000)