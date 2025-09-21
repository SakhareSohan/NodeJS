async function fetchData(): Promise<string> {
    let promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });
  
    let result: string = await promise; // Wait until the promise resolves
    return result;
  }
  
  fetchData().then((result: string) => {
    console.log(result); // "Data fetched!"
  });
  