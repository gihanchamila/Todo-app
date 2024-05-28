const express = require("express")
const mongoose = require("mongoose")

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

app.get("/", async (req, res, next) => {
    try{
        await res.render("index")
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/app-todo", (req, res, next) => {
    try{
        res.render("newToDo")
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/update-todo", (req, res, next) => {
    try{
        res.render("updateToDo")
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/delete-todo", (req, res, next) => {
    try{
        res.render("deleteToDo")
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

// listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});