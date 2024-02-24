class Library{
    constructor(bookl){
    this.bookList = bookl
    this.issuedBooks = {}
}
getBookList(){
this.bookList.forEach(element => {
    console.log(element)
});
}
issueBook(bookName, user){
    if (this.issuedBooks[bookName] == undefined){
    this.issuedBooks[bookName] = user
    }
    else{
        console.log('This book is already issued!')
    }
}

returnBook(bookName){
    delete this.issuedBooks[bookName]
}
}