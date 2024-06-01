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

const updatetodoFormController = async (req, res, next) => {
    try{
        const {id} = req.query
        const todo = await Todo.findById(id)
        res.render("updateToDo", {title:"Update Todo", todo})
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

const deletetodoPageController = (req, res, next) => {
    try{
        const {id} = req.query
        res.render("deleteToDo", {title:"Update Todo", id})
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

const updateToDoController = async (req, res, next) => {
    try{
      const {id} = req.params
      const {title, description} = req.body

      const todo = await Todo.findById(id)
      if(!todo){
        return res.status(404).json({message:"Todo not found"})
      }

      todo.title = title
      todo.description = description
      await todo.save()
      res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteTodoController = async (req, res, next) => {
    try{
        const {id, confirm} = req.query

        if( confirm === "yes"){
            await Todo.findByIdAndDelete(id)
        }
        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {homeController, addtodoFormController, updatetodoFormController, deletetodoPageController, addtodoController, updateToDoController, deleteTodoController}