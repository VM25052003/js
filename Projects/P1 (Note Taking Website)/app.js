if (typeof(Storage) !== "undefined") {
showNotes(); 
//On reloading the page, notes already saved disappeared, hence, called 'showNotes' at the start to display previously made notes

let addNote = document.getElementById("addBtn");
addNote.addEventListener("click", function (e) {
  let txtArea = document.getElementById("addTxt");
  let titleArea = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes); //Convert string to array object
  }
  let myObj = {
    title: titleArea.value,
    text: txtArea.value
  }
  notesObj.push(myObj); //To update notes if clicked on btn, so to add another note
  localStorage.setItem("notes", JSON.stringify(notesObj));
  //Converts Array'notes' to String to store in memory, so instead used this to store as array
  txtArea.value = ""; //To remove text once clicked on add notes, otherwise it would stay there
  titleArea.value = "";
  showNotes(); //Function to display notes in 'Your Notes'
});
} 

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes); //Convert string to array object
  }
  let addNC = ""; //This is a blank string

  notesObj.forEach(function(element, index) {
    //forEach loop can be applied here as 'notes' is an array
    addNC +=
      /*+= to append card to addNC
      give margin of 2 in y and 3 in x
      This is templete literal witrh varibles in ${} 
      Used 'this.id' to send index of clicked note to function 'deleteNote'*/
      `<div class="noteCard my-3 mx-2 card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id = "${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>`; 
  });
  let notesSave = document.getElementById('notes')
  if(notesObj.length != 0){
notesSave.innerHTML = addNC;
  }
  else{
notesSave.innerHTML = `Nothing to display! Use 'Add a Note' section to create to note.`
  }
}


function deleteNote(index){   //Index means array index which you want to delete
let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes); 
  }
notesObj.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();
} 


let search = document.getElementById('searchTxt')
search.addEventListener('input', function(){
  let sval = search.value.toLowerCase();
  let sNoteCard = document.getElementsByClassName('noteCard')
  Array.from(sNoteCard).forEach(function(element){
    let sNoteCardTxt = element.getElementsByTagName("p")[0].innerText 
    //First element of 'p', used .innerText as sNoteCardTxt isn't a function, so to get a string and in which we can use includes
    if(sNoteCardTxt.includes(sval)){
      element.style.display = "block"
    }
    else{
      element.style.display = "none"
    }
  })
})
