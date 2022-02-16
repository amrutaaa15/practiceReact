let firstPromise= new Promise((resolve,reject)=>{
   let str="Amruta";

   if(str.includes('c')){
       resolve("Present")
   }
   else{
       reject("Not Present")
   }
})

firstPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})