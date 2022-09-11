const express = require('express')
const app = express()
const port = 1337

const mongoose = require('mongoose')
const connString = `mongodb+srv://maatmind:${ password }>@cluster0.lleyzz9.mongodb.net/test`
mongoose.connect(connString)

app.listen(port, () => {
  console.log('hi there')
})