class Book {
  constructor(bookName, authorName, genre) {
    this.book = bookName;
    this.author = authorName;
    this.type = genre;
  }
}

class Display {
  add(book) {
    //function name is 'add'
    let tableBody = document.getElementById("tblBody");
    let uiString = `<tr>
                        <td>${book.book}</td>   
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
    tableBody.innerHTML += uiString;
  }

  clear() {
    libraryForm.reset();
  }

  validate(book) {
    if (book.book.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, alert) {
    let showAlert = document.getElementById("alert");
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
</div>;`;
    setTimeout(() => {
      showAlert.innerHTML = "";
    }, 2000);
  }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;
  let bookGenre;
  let fictionGenre = document.getElementById("fiction");
  let programmingGenre = document.getElementById("programming");
  let cookingGenre = document.getElementById("cooking");

  if (fictionGenre.checked) {
    bookGenre = fictionGenre.value;
  } else if (programmingGenre.checked) {
    bookGenre = programmingGenre.value;
  } else if (cookingGenre.checked) {
    bookGenre = cookingGenre.value;
  }

  let book = new Book(bookName, authorName, bookGenre);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.show("success", "Your book has been added");
    display.clear();
  } else {
    display.show("error", "You can't add this book");
  }

  e.preventDefault();
}
