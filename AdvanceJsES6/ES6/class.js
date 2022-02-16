class car{
    constructor(){
        this.carName="Mercedes";
        this.carSpeed=50;
    }

    speed(speed){
        this.carSpeed+=speed;
    }

    checkSpeed(){
        console.log(`name of car is ${this.carName} and speed is ${this.carSpeed}`)
    }
}

let car1=new car;
car1.checkSpeed()
car1.speed(120);
car1.checkSpeed()

// class Audi extends car{
//     constructor(){
       
//         super();
//         this.NameCar="Audi";
//     }

//     print(){
//         console.log(`Two cars are there one is ${this.carName} and second is ${this.NameCar}`)
//     }
// }

// let audi1=new Audi;
// audi1.print()