function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log('End');
    
    
    // using Aysnc
    async function fetchData() {
        return 'Data fetched';
    }
    
    fetchData().then((data) => {
        console.log(data); // Output: 'Data fetched'
    });
    console.log('End');
      