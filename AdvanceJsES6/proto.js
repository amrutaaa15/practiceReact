function car() {
    this.speed=50;
}
car.prototype.namee=function(carName) {
    this.speed+=50;
    nameCar=carName
}
car.prototype.print=function() {
    console.log("the speed is " +this.speed+" and the car is "+ nameCar)
}

let carr=new car(60);
carr.namee("Mercedes");
carr.print();
