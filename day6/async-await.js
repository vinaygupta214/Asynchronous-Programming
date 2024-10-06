async function fetchData() {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
    console.log(data);
  }
  
  fetchData(); // Output after 1 second: 'Data fetched'
  