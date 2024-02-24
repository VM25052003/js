//Pretend that this response is coming from server
const students = [
    {name: 'A', subject: 'Java'},
    {name: 'B', subject: 'JS'}
]
/* function encrollStudent(student){                            //Method1
    setTimeout(function(){
        students.push(student)
        console.log('Students have been encrolled')
    }, 3000);
}
function getStudents(){
    setTimeout(function(){
        let str = ""
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched')
    }, 1000);
}
let newStudent = {name: 'C', subject: 'Python'}
encrollStudent(newStudent)
getStudents() /*

/* a) When encrollStudent = 3000, getStudents = 1000; eS() > gS() w.r.t time, so gS() will start and finish executing first, printing list on screen with students A, B but as as eS() will take more time in execution, it will finish later, and by that time as list is already printed, 'C' will not be there in it
b) We can simply set time such that eS() is executed before gS() (eS() < gS() w.r.t). All 3, A, B, C will be printed as list when encrollStudent = 1000, getStudents = 3000 
In case a), we can use callback function. Once studensts are encrolled, call 'callback function, so that gS() isn't called before eS(), but only after eS() is finished execution*/
/* function encrollStudent(student, callback){             //Method2
    setTimeout(function(){
        students.push(student)
        console.log('Students have been encrolled')
        callback()
    }, 3000);
}
function getStudents(){
    setTimeout(function(){
        let str = ""
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched')
    }, 1000);
}
let newStudent = {name: 'C', subject: 'Python'}
encrollStudent(newStudent, getStudents) */

function encrollStudent(student){             //Method3
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        students.push(student)
        console.log('Students have been encrolled')
        const error = false;
        if (!error) {
        resolve()
        }
        else{
        reject()
        }
        
    }, 3000);
})
}
function getStudents(){
    setTimeout(function(){
        let str = ""
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched')
    }, 1000);
}
let newStudent = {name: 'C', subject: 'Python'} 
encrollStudent(newStudent).then(function(){           //Method a
    getStudents()
}).catch(function() {
    console.log('Some error occured')
})
/*encrollStudent(newStudent).then(getStudents).catch(function() {   //Method b
    console.log('Some error occured')
}) */
//If promise is resolved, then run getStudents(). .then returns a promise that can be catched