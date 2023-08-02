// npm init
// npm install express
// npm install mongoose
// npm install nodemon
//"scripts": {-change in package.json
// "start": "nodemon app.js",
// npm start

const express=require("express");
const app=express();
const PORT=8000;
app.use(express.json());
// const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.get('/', async (req, res) => {
    const todos=await Todo.find();
    res.json(todos);
})
app.post('/todo/new', async (req, res) => { //adding new todo
    const todo = new Todo({
        task:req.body.taskname,
        desc:req.body.description
    })
    todo.save();
    res.json(todos);
})
app.get('/delete-todo/:desc', function (req, res) {
    const description = req.params.desc; // Get the description from the URL parameter

    Todo.findOneAndDelete({ desc: description }) // Find and delete the task with the specified description
        .then(deletedTask => {
            if (deletedTask) {
                console.log("Deleted task:", deletedTask);
            } else {
                console.log("Task not found with description:", description);
            }
            return res.redirect('/');
        })
        .catch(error => {
            console.log("Error deleting task:", error);
            return res.redirect('/');
        });
})

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    else
        console.log('server running on port', 8000);
})