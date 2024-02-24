//While creating object using object literal, we are already assigned by default created methods, these are called prototypes
let obj1 = {
    name: 'Vidhi',
    age: '19',
    address: 'Gzb'
}
console.log(obj1)

/*While creating object using constructors, these constructor will have its own prototype 
We can edit prototype of our object */

function obj2(givenName){
    this.name = givenName
}
obj2.prototype.getName = function(){
    return this.name;
}
obj2.prototype.setName = function(newName){  //Set new name
    this.name = newName;
}
let Obj = new obj2("VM")
console.log(Obj)
console.log(Obj.getName())
Obj.setName('VM25')
console.log(Obj)