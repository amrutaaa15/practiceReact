
let calc = document.getElementById("calc");
let btns = document.querySelectorAll("button");
let text=document.getElementById("text");
let inputValue = "";
const arrays=[];
const arr=[0];

let temp;
let maths;
let input;
for (btn of btns) {
    btn.addEventListener("click", (e) => {
        num = e.target.innerText;
        if (num == "=") {
            calc.value = inputValue+ " = "+eval(inputValue);
            maths=calc.value;
            inputValue=eval(inputValue)
            arrays.push(maths);
            arrays.forEach(element => {
                console.log("history"+element);
                let li=document.createElement('li');
                let hr=document.createElement('hr');
                li.style.listStyle="none";
                li.innerHTML=element;
                text.append(li);
                text.append(hr)
                arrays.shift(arrays[0]);
            });
        }

        else if (num == "C") {
            inputValue =" ";
            calc.value=inputValue;
        }
    

        else if(num=="^"){
            inputValue+=num;
            calc.value=inputValue;
        }
        
        else{
            inputValue += num;
            calc.value = inputValue;
            if(inputValue.includes("^")){
                temp=e.target.innerText;
                console.log(temp);
                inputValue=Math.pow(input,temp);   
            }
            else{
                input=e.target.innerText;
            }
           
        }
    })
}

