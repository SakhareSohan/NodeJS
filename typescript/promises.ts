let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
  
  
  promise
  .then((message: string) => {
    console.log(message);
  })
  .catch((error: string) => {
    console.error(error);
  });
