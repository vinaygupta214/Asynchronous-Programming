function getUser(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => user)
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }
  
  getUser(1).then((user) => {
    console.log('User:', user);
  });

  
    // using async-await
    async function getUser(userId) {
        try {
          const response = await fetch(`https://api.example.com/users/${userId}`);
          const user = await response.json();
          return user;
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
      
      (async () => {
        const user = await getUser(1);
        console.log('User:', user);
      })();
      