let myLibary = []

function main () {
  myLibary.push(new Book({
    title: 'First title',
    author: 'Me',
    pages: 85
  }))

  render()
}

function Book({title, author, pages, read = false }){
  this.title = title || 'No Title'
  this.author = author || 'No Author'
  this.pages = pages || 0
  this.read = read
}

function getNodes(){
  return{
  $title: document.getElementById('title'),
  $author: document.getElementById('author'),
  $pages: document.getElementById('pages')
  }
}

form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addBook()
})

function addBook(){
  const { $title, $author, $pages } = getNodes()
  let title = $title.value
  let author = $author.value
  let pages = $pages.value

  let book = new Book({title, author, pages})
  myLibary.push(book)
  form.reset()
  render()
}

function deleteBook(index) {
  myLibary.splice(index, 1)
  render()
}

function updateBookReadState (index) {
  myLibary[index].read = !myLibary[index].read
  render()
}

function render(){
  let $bookList = document.getElementById('books-container')
  $bookList.innerHTML  = ''
  myLibary.forEach((book, index)=>{
    const item = document.createElement('li')
    item.classList.add('col-4')
    item.classList.add('my-2')
    const btnType = book.read ? 'warning' : 'success'
    const btnText = book.read ? 'Not read': 'Read'
    const status = book.read ? 'Read' : 'Not Read'
    item.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${book.title}</h4>
        <h5 class="">Author: ${book.author}</h5>
        <h6 class="">Pages: ${book.pages}</h6>
        <h6> status: ${status}</h6>
        <a href="#" onClick="updateBookReadState(${index})" class="btn btn-${btnType}">${btnText}</a>
        <a href="#" onClick="deleteBook(${index})" class="btn btn-danger">Delete</a>
      </div>
    </div>
    `
    $bookList.appendChild(item)
  })
}

document.addEventListener('DOMContentLoaded', main)