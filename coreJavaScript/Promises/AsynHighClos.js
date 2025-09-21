const url = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
  ];
  
  async function dataFetching(urls) {
    // Simulate data fetching
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!urls) {
          reject(new Error('Fetching Went Wrong'));
        } else {
          resolve(urls);
        }
      }, 1000);
    });
  }
  r
  
  dataFetching(url)
    .then((arr) => {
      const flat = arr.flat(Infinity);
      return flat;
    })
    .then((arr) => {
      const filterArray = arr.filter((element) => element % 2 != 0);
      return filterArray;
    })
    .then((arr) => {
      const sum = arr.reduce((total, element) => total + element, 0);
      console.log('Filtered Array:', arr);
      console.log('Sum of Filtered Array:', sum);
    })
    .catch((error) => {
      console.error(error.message);
    });
  