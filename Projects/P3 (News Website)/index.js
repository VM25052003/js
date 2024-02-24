

//Initialise the news api parameters
let mySource = 'bbc-news'
let myApiKey = 'c4f8618c6b584e1c95c40d40958a83f9'


//Grab the news container
let newsAccordion = document.getElementById('newsAccordion')


//Create an ajax get request
const xhr = new XMLHttpRequest() 
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${mySource}&apiKey=${myApiKey}`, true)                                                                                   //Method1
// xhr.open('POST', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c4f8618c6b584e1c95c40d40958a83f9', true)                                         //Method2
xhr.getAllResponseHeaders('Content-type', 'application/json')


//What to do when response is ready
xhr.onload = function(){ 
    if (this.status === 200)  {
    let json = JSON.parse(this.responseText)
    let articles = json.articles
    console.log(articles)
    let newsHtml = "";
    articles.forEach(function(element4article, index) {  //Applied foreach as articles is an array
      let news = `<div class="card">
                  <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><span class="badge badge-info"><b>Today's Top ${index+1}:</b></span>${element4article["title"]}</button>
                    </h2>
                  </div>
                  <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body">${element4article["content"]}.
                    <a href="${element4article["url"]}" target="_blank" >Read more here"</a>
                    </div> 
                  </div>
                  </div>`
//target="_blank" - Open link in new tab
                  
    newsHtml += news //Add news to empy string newsHtml
    });   
    newsAccordion.innerHTML = newsHtml;  //Add newsHtml to Html of newsAccordian
    }
    else {
        console.error('Some error occured')
    }
}
xhr.send()


