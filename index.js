function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(json) {
  console.log(json)
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function renderPages (json) {
  const main = document.querySelector('main')
  let total = 0
  json.forEach(book => {
    total += book.numberOfPages
  })
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${total}`
  main.appendChild(h2)
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
