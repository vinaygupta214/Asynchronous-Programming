const promise =new promise((resolv,reject)=> {
    //Asynchronous operation
});

const  fetchData =new promise((resolve,reject)=>{
    setTimeout(()=>{
        const data={id:1,name:'JOhn Doe'};
        resolve(data);
        //or in case of error:
        //reject('error fetching data')
    },1000);
});