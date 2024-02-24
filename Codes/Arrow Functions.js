const fun1 = function(){
    console.log('fun1: Creating a normal function')
}
fun1()


const fun2 = ()=>{
    console.log('fun2: Creating it to arrow function')
}
fun2()


const fun3 = function(){
    return 'fun3: Functions returning something require \'return\' keyword'
}
console.log(fun3())


const fun4 = ()=> 'fun4: One liner Arrow functions don\'t require braces/return, they automatically return. However, if do so, won\'t give error'
console.log(fun4())


const fun5 = ()=> ({name: 'If asked to return object, if used only {} will return \'undefined\' keyword, Write in this way ({})'})          //Method1
console.log(fun5())


const fun6 = name => 'GM ' + name                         //Method2
console.log(fun6('Vidhi'))
const fun7 = (name, ending) => 'GM ' + name + ending //Use (), if more than 1 parameter
console.log(fun7('Vidhi,', ' have a nice day!'))