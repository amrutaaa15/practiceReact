let btn=document.getElementById('btn');
let btn1=document.getElementById('btn1');
let body=document.getElementById('body');


class clock{
    
    render(){
        let date=new Date();
        this.h=date.getHours();
        this.m=date.getMinutes();
        this.s=date.getSeconds();
         body.innerHTML=(this.h +" : "+ this.m+" :"+ this.s )
    }

    start(){
       this.set= setInterval(() => {
            this.render();
        }, 1000);
    }

    stop(){
        clearInterval(this.set);
    }
}

let time=new clock;
btn.addEventListener("click", function(){
    time.render();
    time.start();
})

btn1.addEventListener("click", function(){
    time.stop();
})