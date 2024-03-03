let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggle(index){
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i=0; i<myLibrary.length;i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="card">
            <h3>${book.title}</h3>
            <h5>AUTHOR:${book.author}</h5>
            <h5>PAGES: ${book.pages}</h5>
            <h5>Completed: ${book.read? "Yes": "No"}</h5>
            <div>
                <button class="remove" onclick="removeBook(${i})">Remove</button>
                <button class="toggle" onclick="toggle(${i})">Toggle</button>
            </div>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    dialog.close();
}

let dialog = document.querySelector("dialog");
let addBookbtn = document.querySelector("#addBook");
let closeBtn = document.querySelector(".close");
addBookbtn.addEventListener('click', function () {
    dialog.showModal();
})
closeBtn.addEventListener("click", () => {
    dialog.close();
});

document.querySelector("#newBookForm").addEventListener("submit", function () {
    event.preventDefault();
    addBookToLibrary();
});