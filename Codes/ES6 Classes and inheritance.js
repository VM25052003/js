//class is a blue print/ template
//constructor is called when object of class is created. It is used to initialize objects
class Employee{
constructor(givenname, givenexperience, givendivision){  //arguments passed in constructor
   //this.name acts as value accessed and givenname as key
    this.name = givenname
    this.experience = givenexperience
    this.division = givendivision
 }
 slogan(){
    return `I am ${this.name} and this company is the best`
 }
 joiningYear(){
    return 2022 - this.experience;
 }
 static salaryAdd(a, b){ //Static method can be used without creating objects
    return a + b;
 }
}
let E1 = new Employee('XYZ', 1, 'D1')
console.log(E1)
console.log(E1.joiningYear())

//INHERITANCE
class Programmer extends Employee{
    constructor(givenname, givenexperience, givendivision, givenlanguage){
    super(givenname, givenexperience, givendivision)  
    this.language = givenlanguage
    //Super is used to call constructor of prevoius class which the new class is extending. Here, new class programmer is extending Employee. So, super calls constructor of Employee class
    }
    static multiply(a, b){
        return a*b;            
    }
}

console.log(Employee.salaryAdd(35, 5))   
console.log(Programmer.salaryAdd(40, 10))   
// console.log(Employee.multiply(35, 5))   //won't work here for Employee
console.log(Programmer.multiply(40, 10))
//Working for both Employee and programmer due to 'static'//    