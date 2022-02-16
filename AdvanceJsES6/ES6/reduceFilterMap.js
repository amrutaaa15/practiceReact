let arr=[1,2,3,4];

arr.forEach((arr)=>{console.log(arr*2)});


filterarr=arr.filter((arr)=>arr>3);
console.log(filterarr)

const total =arr.reduce((prev,current)=>{
    console.log(prev+' '+current);
    return prev+current
},0)

console.log(total)