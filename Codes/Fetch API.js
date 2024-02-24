let myBtn = document.getElementById('your btn')
let content = document.getElementById('contentHere')


/*Fetch(url) will return a promise. Once this promise is resolved, return response.text. Again, 
.then is used to get data. Hence, while fetching, .then is used twice */
function getData(){
    console.log('Started getData(): moved inside getData()')
    url = 'AjaxFile.txt'
    fetch(url).then((response)=>{
        console.log('Inside first then(): fetch(url) statement runs and continues working in background, so skips this and function returns')
        return response.text()    
    }).then((data)=>{
        console.log('Inside second then(): As fetch(), continues, this statement is printed at the end')
        console.log(data)
    })
}
console.log('Before running getData()')
getData()
console.log('After running getData(): Printed next as fetch(url) statement is asyncronous. As flow of this js file is finished, it moves back to continue with the function remaining')



/*function getData(){
    url = 'https://api.github.com/users'
    fetch(url).then((response)=>{
        return response.json()      //response.text = returns as plain text
    }).then((data)=>{               //response.json = returns parsed text
        console.log(data)
    })
}
getData()*/


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"eg1","salary":"123","age":"23"}' 
    //Already a string. But if an object(in most cases, it is), need to stringify it
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    /*fetch(url, params).then((response)=>{                                             //Method1
        return response.text()    
    }).then((data)=>{
        console.log(data)
    }) */
    fetch(url, params).then(response=> response.json()).then(data => console.log(data)) //Method2
}
postData()