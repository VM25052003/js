//Object is a unique entity that contains properites and methods

//Object literal to create object
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function(){
        console.log('car is running')
    }
}
console.log(car)
console.log(car.name)
console.log(car.topSpeed)
console.log(car.run())

//Constructor is template to create objects
//Creating a Constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name1 = givenName;
    this.topSpeed1 = givenSpeed;
    this.run1 = function() {
        console.log(`${this.name1} is running`)
    }
    this.analyzeSpeed = function() {
        console.log(`This car is slower by ${200 - this.topSpeed1}Km/h than Mercedes`)
    }
}
//'new' keyword creates new objects with help of constructor
let car1 = new GeneralCar('Nissan', 100)
let car2 = new GeneralCar('Hyundai', 120)
console.log(car1)
console.log(car2)
console.log(car1.run1())
console.log(car2.run1())