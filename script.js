"use strict"

let myLibrary = []

// from the DOM
const container = document.querySelector(".container")
const bookDOM = document.querySelector(".book")
const authorDOM = document.querySelector(".author")
const titleDOM = document.querySelector(".title")
const numPagesDOM = document.querySelector(".num-pages")
const hasReadsDOM = document.querySelector(".have-read")
const addBookBtn = document.querySelector(".add-book")
const submit = document.querySelector(".submit")
const resultContainer = document.querySelector(".result-container")

addBookBtn.addEventListener("click", () => {
  bookDOM.classList.toggle("display-none")
})

let libary = []

function Book() {
  // the constructor...
  let userBook = {
    author: document.getElementById("author-input").value,
    title: document.getElementById("title-input").value,
    pages: document.getElementById("num-pg-input").value,
    read: document.getElementById("have-read-input").value,
  }
  let bookHtml = document.createElement("div")
  bookHtml.innerHTML = `<div class="book">
  <h2 class="author">Author:</h2>
  <h2 class="alignself">${userBook.author}</h2>
    
  <h2 class="title">Tilte:</h2>
  <h2 class="alignself">${userBook.title}</h2>
  <h2 class="num-pages">Number of pages:</h2>
  <h2 class="alignself">${userBook.pages}</h2>
  <h2 class="have-read">Have Read:</h2>
  <h2 class="alignself">${userBook.read}</h2>
</div>
</div>`
  libary.push(bookHtml)
  resultContainer.insertAdjacentElement("beforeend", bookHtml)
  // container.insertAdjacentElement("beforeend", bookHtml)
}

submit.addEventListener("click", Book)
submit.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
  // do stuff here
}
