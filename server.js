console.log('May node be with you');
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://singular:1423willow@atlascluster.ducnczs.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function() {
    console.log('listening on 3000')
  })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    //_dirname is the current directory you are in.
  })
app.post('/quotes', (req, res) => {
    console.log(req.body)
  })
