let firstPromise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(5);
    }, 2000);

})

firstPromise.then((res)=>{
    console.log(res);
    return res*5;
})
.then((res)=>{
    console.log(res);
    return res*5;
})
.then((res)=>{
    console.log(res);
    return res*5;
}).then((res)=>{
    console.log(res);
    return res*5;
})