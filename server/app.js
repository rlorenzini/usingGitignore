const express = require('express')
var cors = require('cors')
// console.log(express)
const app = express()
// let cors = require('cors')
let bodyParser = require('body-parser')
let books = []
app.use(cors())

app.use(bodyParser.json())

app.get('/', function(req,res) {
  res.send("hello world")
})

app.post('/books',function(req,res){
  let genre = req.body.genre
  let year = req.body.year
  let book = {genre: genre, year: year}
  books.push(book)
  console.log(genre)
  console.log(year)
  res.send("OK")
})

app.get('/books',function(req,res){
  res.json(books)
})
app.get('/books/:genre',function(req,res){
  let genre = req.params.genre
  res.send(`This is genre ${genre}.`)
})
app.get('/books/:genre/year/:year',function(req,res){
  // consol.log(req.params)
  let genre = req.params.genre
  let year = req.params.year
  res.send(`The genre is ${genre} and the year is ${year}.`)
})
app.get('/books',function(req,res){
  let books = [
    {genre: "X", year: 2018},
    {genre: "Y", year:2017}
  ]
  res.json(books)
})


app.listen(3000,function(){
  console.log("server is running")
})
