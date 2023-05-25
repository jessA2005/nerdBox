const books= [
    {title: "book1", author:"author", rate: "1", descrip:"loremhluihi;h;", img:"img/books/book1.jpg"},
    {title: "book2", author:"author", rate:"1.5", descrip:"loremhluihi;h;", img:"img/books/book2.jpg"},
    {title: "book3", author:"author", rate:"5", descrip:"loremhluihi;h;", img:"img/books/book3.jpg"},
    {title: "book4", author:"author", rate:"4", descrip:"loremhluihi;h;", img:"img/books/book-cover-7.jpg"},
]
function addBook(book) {
    const container = document.querySelector('.books')
    const card = `
    <div class="book">
    <div class="cover">
        <img src="${book.img}" alt="title"/>
    </div>
    <div class="details">
        <h2>${book.title}<h2>
        <h3>${book.author}<h3>
        <div class="rate">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<h3 class="bookrate">${book.rate}</h3>
        </div>
    <button class="review"><a href="#">review</a></button>
    </div>
    </div>
    `

    container.innerHTML+=card
    
    return card
}

for (let book of books) {
    console.log(book)
    addBook(book);

    const ratefont = document.querySelector('.bookrate')
    const rate = parseInt(book.rate);
    console.log(rate, ratefont)

}