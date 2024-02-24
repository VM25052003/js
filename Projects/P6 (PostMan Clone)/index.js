//Utility function to get DOM from String
function getElementFromString(string){
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild
}

//Initialize number of Parameter
let parameterCount = 0

//Hide the parameter box initially
let parameterBox = document.getElementById('parameterBox')
parameterBox.style.display = 'none'

//If user clicks on custom parameter radio, hide the request JSON box.
let customPRadio = document.getElementById('customPRadio')
customPRadio.addEventListener('click', () => {
    document.getElementById('requestJSONBox').style.display = 'none' //hiding JSON box
    document.getElementById('parameterBox').style.display = 'block'  //Displaying parameter box
})

//If user clicks on JSON radio, hide the parameter box.
let jsonRadio = document.getElementById('jsonRadio')
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJSONBox').style.display = 'block' //Displaying JSON box
    document.getElementById('parameterBox').style.display = 'none'    //hiding parameter box
})

//If user clicks on '+' button add more parameter
let addParameter = document.getElementById('plusAdd')
addParameter.addEventListener('click', () => {
    let customP = document.getElementById('customP');
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${parameterCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${parameterCount + 2}" placeholder="Enter Parameter ${parameterCount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${parameterCount + 2}" placeholder="Enter Parameter ${parameterCount + 2} Value">
                    </div>
                    <button class="btn btn-primary deleteParameter"> - </button>
                    </div>`

//Convert the element string from DOM node
let parameterBoxElement = getElementFromString(string)
customP.appendChild(parameterBoxElement)

//Add an event listener to remove parameter on clicking '-' button
let deleteParameter = document.getElementsByClassName('deleteParameter')
for (extraElement of deleteParameter) {
    extraElement.addEventListener('click', (e) => {
        e.target.parentElement.remove() //When clicked on target 'e', remove its parent element 'div'
    })
}
parameterCount ++
})

//If user clicks on submit button
let submit = document.getElementById('submit')
submit.addEventListener('click', () => {
    // document.getElementById('responseJSONText').value = 'Please Wait... fetching response'
    document.getElementById('responsePrism').innerHTML = 'Please Wait... fetching response'
    //Fetch all data user has entered
let url = document.getElementById("url").value;
let requestType = document.querySelector("input[name='requestType']:checked").value;
let contentType = document.querySelector("input[name='contentType']:checked").value;

//If user has entered custom parameter instead of json, collect all parameters in an object
if (contentType == 'customP') {
    data = {};
    for (let i = 0; i < parameterCount + 1; i++) {
        if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
            let key = document.getElementById('parameterKey' + (i + 1)).value;
            let value = document.getElementById('parameterValue' + (i + 1)).value;
            data[key] = value; 
        }
    }
    data = JSON.parse(data);
}
else{
     data = document.getElementById('requestJSONText').value
}


//If request type is get, invoke fetch api to create a post request
if (requestType=='GET'){
    fetch(url, {
        method: 'GET',  

    })
    .then(response=> response.text())
    .then((text) =>{
        // document.getElementById('responseJsonText').value = text;
        document.getElementById('responsePrism').innerHTML = text;
        Prism.highlightAll();
    });
}
else{
    fetch(url, {
        method: 'POST',
        body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
    })
    .then(response => response.text())
    .then((text) => {
        // document.getElementById('responseJSONText').value = text
        document.getElementById('responsePrism').innerHTML = text
        Prism.highlightAll()
    })
}
console.log('data is ' + data)
})

