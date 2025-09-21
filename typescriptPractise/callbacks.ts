function fetchData1(callback: (data: string) => void): void {
    setTimeout(() => {
      callback("Data fetched via callback!");
    }, 1000);
  }
  
  fetchData1((data: string) => {
    console.log(data); // "Data fetched via callback!"
  });
  