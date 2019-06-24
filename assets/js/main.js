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

function addBook(){
  const { $title, $author, $pages } = getNodes() 

  let title = $title.value
  let author = $author.value
  let pages = $pages.value

  let book = new Book({title, author, pages})
  myLibary.push(book)
  console.log(myLibary)
  clearForm($title, $author, $pages )
}


function clearForm( title, author, pages){
  title.value = ''
  author.value = ''
  pages.value = ''
}


