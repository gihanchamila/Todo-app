const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo")
const moment = require("moment")
const todo = require("../controllers/todo")

router.get("/", todo.homeController);

router.get("/add-todo", todo.addtodoFormController );

router.get("/update-todo", todo.updatetodoFormController );

router.get("/delete-todo", todo.deletetodoPageController );

router.post("/add-todo", todo.addtodoController );

module.exports = router;