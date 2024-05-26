const express = require("express")
const { default: mongoose } = require("mongoose")

const PORT = 8000

// init app
const app = express()

// Connect database
const connectionUrl = "mongodb://localhost:27017/todoDb"

mongoose.connect(connectionUrl).then(() => {
    console.log("Database connected successfully")
}).catch((error) => {
    console.log(error.message)
});

// view engine
app.set("view engine", "ejs")

// listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});