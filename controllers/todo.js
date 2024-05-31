const moment = require("moment")
const Todo = require("../models/Todo")

const homeController = async (req, res, next) => {
    try{
        const todos = await Todo.find({}).sort({createdAt: -1})
        res.locals.moment = moment
        await res.render("index", {title:"List Todo", todos})
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const addtodoFormController = (req, res, next) => {
    try{
        res.render("newToDo", {title:"Add Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const updatetodoFormController = (req, res, next) => {
    try{
        res.render("updateToDo", {title:"Update Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const deletetodoPageController = (req, res, next) => {
    try{
        res.render("updateToDo", {title:"Update Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const addtodoController = async (req, res, next) => {
    try{
        const {title, description} = req.body;

        if(!title){
            return res.status(400).json({message:"Title is required"})
        };

        const newTodo = new Todo({title, description}) 
        await newTodo.save()
        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {homeController, addtodoFormController, updatetodoFormController, deletetodoPageController, addtodoController}