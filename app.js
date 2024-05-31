const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const moment = require("moment")
const connectMongodb = require("./init/mongoDB")
const Todo = require("./models/Todo")
const todoRoute = require("./routers/todo")

// init app
const app = express()

// Connect database
connectMongodb()

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", todoRoute)

module.exports = app