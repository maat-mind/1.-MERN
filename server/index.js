require('dotenv').config()

const express = require('express')
const app = express()
const port = 1337

const mongoose = require('mongoose')
const connString = `mongodb+srv://maatmind:${ process.env.DB_PASSWORD }@cluster0.lleyzz9.mongodb.net/test`
console.log(connString)
mongoose.connect(connString)

app.listen(port, () => {
  console.log('hi there')
})