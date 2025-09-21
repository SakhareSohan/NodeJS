// Promises
function pro_fun(){
    return new Promise((resolve, reject) => {
      console.log('This is a promise and we are about to Start');
      reject('This is an error');
      setTimeout(() => {
        console.log('This is a promise and we are about to End');
        resolve('This is a Sample Data which is fetched from the server');
      }, 5000)
      
    })
  }
  
  // async function and await 
  async function data(){
    console.log('This is a async function');
    try{
      let data = await pro_fun();
      console.log(data);
    } catch(error) {
      console.log('This is an error:' , error.message);
    } finally{
      console.log('COMPLETE');
    }
  }
  
  data()