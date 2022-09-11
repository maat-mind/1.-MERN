require('dotenv').config()

// EXPRESS
const express = require('express')
const app = express()
const port = 1337

// MONGODB
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const connString = `mongodb+srv://maatmind:${ process.env.DB_PASSWORD }@cluster0.lleyzz9.mongodb.net/mern-tutorial?retryWrites=true&w=majority`

mongoose.connect(connString)

// HTTP REQUESTS
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) console.error(err)

    res.json(data)
  })
})


app.listen(port, () => {
  console.log('hi there')
})