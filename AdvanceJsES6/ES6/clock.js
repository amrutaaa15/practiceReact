
class clock{
    
    render(){
        let date=new Date();
        this.h=date.getHours();
        this.m=date.getMinutes();
        this.s=date.getSeconds();
         console.log(this.h +" : "+ this.m+" :"+ this.s )
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
time.render();
time.start();
// time.stop();