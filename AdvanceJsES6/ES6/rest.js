let sum=0;
let add=(...args)=>{

    for(let a of args){
    sum+=a;
    }
    return sum;
}

console.log(add(2,3,5));
console.log(add(2,3,5,7));
console.log(add(2,3));