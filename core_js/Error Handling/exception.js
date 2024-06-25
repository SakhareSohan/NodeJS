try {
    let arr = [1, 2, 3];
    if (arr[5] === undefined) {
      throw new Error('Index out of bounds');
    }
  } catch (err) {
    console.log('Caught an error:', err.message);
  }
  finally{
    console.log('done')
  }