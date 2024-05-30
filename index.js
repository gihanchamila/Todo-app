const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

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
app.use(express.static(path.join(__dirname, "public")))

app.get("/", async (req, res, next) => {
    try{
        await res.render("index", {title:"List Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/add-todo", (req, res, next) => {
    try{
        res.render("newToDo", {title:"Add Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/update-todo", (req, res, next) => {
    try{
        res.render("updateToDo", {title:"Update Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get("/delete-todo", (req, res, next) => {
    try{
        res.render("deleteToDo", {title:"Delete Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

// listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});