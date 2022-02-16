let salaries={
    "Amruta":30000,
    "Amar":20000,
    "Amol":40000
}

let sum=0;
let topSalary=(salaries)=>{
  
console.log(salaries);

if(salaries.Amruta>salaries.Amar && salaries.Amruta>salaries.Amol){
    console.log("Amruta")
}
else if(salaries.Amar>salaries.Amruta && salaries.Amar>salaries.Amol){
    console.log("Amar")
}
else if(salaries.Amol>salaries.Amruta && salaries.Amol>salaries.Amar){
    console.log("Amol")
}
else if (salaries.Amruta || salaries.Amar || salaries.Amol==null){
    console.log("none")
}
}

topSalary(salaries);