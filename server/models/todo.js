const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})
const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo;