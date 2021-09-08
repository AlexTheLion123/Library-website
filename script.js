let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const read = document.querySelector(".button");
read.addEventListener('click', e => {
    e.target.textContent == 'READ' ? e.target.textContent = 'UNREAD' : e.target.textContent = 'READ';
    e.target.textContent == 'READ' ? e.target.style.background = 'rgb(117, 96, 96)' : e.target.style.background = 'rgb(100, 62, 62)' ;
  })

const addItem = document.querySelector(".add-item");
addItem.addEventListener('click', e => {
    console.log(e);
})

