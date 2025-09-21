// Higher-Order Function
function processData(fn: (data: string) => void): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Processed Data";
        fn(data);
        resolve();
      }, 1000);
    });
  }
  
  // Callback Function
  function logData(data: string): void {
    console.log(data);
  }
  
  // Async Function using the Higher-Order Function
  async function asyncProcess(): Promise<void> {
    await processData(logData);
  }
  
  asyncProcess();
  