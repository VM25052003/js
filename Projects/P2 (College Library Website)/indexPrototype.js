function Book (bookName, authorName, genre){  //Constructor to create object 'Book'
       this.book = bookName
       this.author = authorName
       this.type = genre
}

//Display constructor
function Display(){

}
//Add methods to display prototype
//Implementing add method
// ${} same as constructor variable
Display.prototype.add = function(book){
    let tableBody = document.getElementById('tblBody')
    let uiString = `<tr>
                    <td>${book.book}</td>   
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`
tableBody.innerHTML += uiString
}

//Implementing clear method
Display.prototype.clear = function(){
    libraryForm.reset();
}

//Implementing validate method
Display.prototype.validate = function(book){
    if(book.book.length<2 || book.author.length<2){
    return false;
}
else {
    return true;
}
}

Display.prototype.show = function(type, alert){
    let showAlert = document.getElementById('alert')
    let boldText;
    if (type == "success") {
      boldText = "success";
    } else {
      boldText = "error";
    }
    showAlert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${boldText}:</strong> ${alert}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>;`
setTimeout(() => {              //To remove alert message after 2000 ms
    showAlert.innerHTML = '' 
}, 2000);
}

//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit) //When submit event triggered, run function libraryFormSubmit
function libraryFormSubmit(e){
    let bookName = document.getElementById('bookName').value
    let authorName = document.getElementById('authorName').value
    let bookGenre;
    let fictionGenre  = document.getElementById('fiction')
    let programmingGenre = document.getElementById('programming')
    let cookingGenre = document.getElementById('cooking')
    
    if(fictionGenre.checked){
        bookGenre = fictionGenre.value
    }
    else if(programmingGenre.checked){
        bookGenre = programmingGenre.value
    }
    else if(cookingGenre.checked){
        bookGenre = cookingGenre.value
    }

    let book = new Book(bookName, authorName, bookGenre)
    console.log(book) //But client will not open console to check book added, so we have to display table on the screen

    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.show('success', 'Your book has been added')
        display.clear() //To clear display after submission to add new book
    }
    else{
        display.show('error', 'You can\'t add this book')
    }
    
    e.preventDefault()  
    //Prints in console whatever user types on form, but due to default behaviour, whenever clicks on 'add book', reloads page and console clears. So, prevented this default behaviour
}