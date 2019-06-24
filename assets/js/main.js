let myLibary = []

function Book({title, author, pages}){
  this.title = title
  this.author = author
  this.pages = pages
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
  console.log(myLibary)
  form.reset()
  render()
}

function render(){
  let book_list = document.getElementById('books-container')
  const item = document.createElement('li')
  item.innerHTML  = ''
  myLibary.forEach((book)=>{
     item.innerHTML = `
      <li class="col-xs-4 mb-5">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${book.title}</h4>
          <h5 class="">${book.author}</h5>
          <h6 class="">${book.pages}</h6>
          <a href="#" class="btn btn-primary"> read!</a>
        </div>
      </div>
    </li>
      `
    book_list.appendChild(item)
  })


}



