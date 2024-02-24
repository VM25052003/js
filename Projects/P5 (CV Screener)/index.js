const data = [ 
    {
        name: 'ABCD',
        age: 25,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: 'EFGH',
        age: 31,
        city: 'Bangalore',
        language: 'Javascript',
        framework: 'Angular',
        image: "https://randomuser.me/api/portraits/women/55.jpg"
    },

    {
        name: 'IJKL',
        age: 21,
        city: 'Delhi',
        language: 'python',
        framework: 'Flask',
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    },

    {
        name: 'MNOP',
        age: 18,
        city: 'Mumbai',
        language: 'python',
        framework: 'No python',
        image: "https://randomuser.me/api/portraits/women/25.jpg"
    }
]

//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0
    //If index is less that length of profile, done = false as list of candidates is still not finished and increment index, else done = true as list is finished and stop
    return{
        next: function(){
            return nextIndex<profiles.length ? {values: profiles[nextIndex++], done: false} : {done: true}
        }
    }
}
const candidates = cvIterator(data)
nextCV() //Shows profile only when we click on next, so initially show blank screen with 'next' buttoon. So, called nextCV() just after cvIterator

//Button listener for 'next' button
const nextButton = document.getElementById('nextbtn')
nextButton.addEventListener('click', nextCV)
function nextCV(){
    const currentCandidate = candidates.next().values
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if (currentCandidate != undefined){ 
    //As would show error in console once all applications are seen
    image.innerHTML = `<img src = '${currentCandidate.image}'>` 
    //image in nextCandidate is key for value 'image url' in array 'data'
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        alert('End of Candidate applications')
        window.location.reload() //Reloads applicatons from start
    }
}