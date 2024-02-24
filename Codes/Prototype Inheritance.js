//Object created using object literals are inherited from object.prototype while created using constructors are inherited from constructors only
const proto = {
    slogan: function(){
        return `This company is best`
    },       // ',' must to separate functions 
    changeName: function(newName){
        this.name = newName
    }
}
//SYNTAX 1 to create object VM1
const VM1 = Object.create(proto)
VM1.name = "VM"
VM1.role = "Programmer"
VM1.changeName("Vidhi Mathur")  //Changed from VM to Vidhi Mathur
console.log(VM1)


//SYNTAX 2 to create object VM2
const VM2 = Object.create(proto, {
    name: {value: "VM"},
    role: {value: "Programmer"}
})
VM2.changeName("Vidhi Mathur")  //Doesn't change VM to Vidhi Mathur
console.log(VM2)

const VM3 = Object.create(proto, {
    name: {value: "VM", writable: true},
    role: {value: "Programmer"}
})
VM3.changeName("Vidhi Mathur")  //Changed VM to Vidhi Mathur
console.log(VM3)

//Employee constructor
function Employee(name, salary, experience){
    this.name = name,
    this.salary = salary,
    this.experience = experience
}
Employee.prototype.slogan = function(){
    return `This company is best. Regards, ${this.name}`
}
let VM4 = new Employee("Vidhi Mathur", 4000000, 1)
console.log(VM4.slogan())

//Programmer is also an employee, so we'll inherit if from employee 
function Programmer(name, salary, experience, language){
Employee.call(this, name, salary, experience) 
//Call is a function, which means w.r.t this constructor(programmer) call Employee, but still slogan isn't printed as Employee's prototype isn't inherited 
this.language = language
}
Programmer.prototype = Object.create(Employee.prototype) //Inherit prototype
Programmer.prototype.constructor = Programmer //Manually set constructor as Programmer, otherwise show as Employee
let xyz = new Programmer('xyz', 2000000, 1, 'Javascript')
console.log(xyz)
console.log(xyz.slogan())
