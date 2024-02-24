let fetch = document.getElementById('fetchBtn')
fetch.addEventListener('click', fetchBtnHandler)
function fetchBtnHandler(){ 
    console.log('You have clicked on fetch button')
    
    const xhr = new XMLHttpRequest() //Instantiate(create) an xhr object

    xhr.open('GET', 'AjaxFile.txt', true)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getAllResponseHeaders('Content-type', 'application/json')
    /*Open the object 
    1st argument - what type of request, 'GET' - only fetching request, 'POST' - send some data along with request. Send passwords through 'POST', not 'GET' due to security point of view.
    2nd argument - From where to fetch data
    3rd argument - true for async (non - blocking request) and false for sync (blocking request))*/

    xhr.onprogress = function(){ 
        console.log('On progress')
    }
    //What to do on progress (optional). We can depict a 'boot' symbol and remove it when done using 'onload'

    /* xhr.onreadystatechange = function(){
        console.log('Ready state is ', xhr.readyState) 
    }
    Earlier function used before 'onload'
    readyState - holds the status of the XMLHttpRequest.
    onreadystatechange - defines a function to be executed when the readyState changes 
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready */

    xhr.onload = function(){ //What to do when everything is done
        if (this.status === 200)  {
        console.log(this.responseText)
        }
        else {
            console.error('Some error occured')
            //To check status, 200 is response code in http which means 'response ok'. It may be possible that file from where we have to fetch data, isn't there. So, if that file is present, then print response text. Otherwise, print error
        }
    }
    params = `{"name":"test34sad545","salary":"123","age":"23"}`
    xhr.send(params) //send the request
    console.log('This is printed before progress statement as async is true. So, not blocked ')
}
let populate = document.getElementById('popBtn')
populate.addEventListener('click', popBtnHandler)
function popBtnHandler(){
    console.log('You have clicked on populate button')
    
    const xhr = new XMLHttpRequest() 

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    xhr.onload = function(){ 
        if (this.status === 200)  {
        let obj = JSON.parse(this.responseText)
        console.log(obj)
        let listEmp = document.getElementById('list')
        let str = "";
        for (key in obj){
            str += `<li>${obj[key].employee_name}</li>`;
            }
        listEmp.innerHTML = str;
        }
        else {
            console.error('Some error occured')
        }
    }
    xhr.send() 
    console.log('This is printed before progress statement as async is true. So, not blocked ')
}