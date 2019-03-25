
fetch('http://localhost:3000/books')
.then(response => response.json())
.then(json => console.log(json))
