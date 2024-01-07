const mongoose = require("mongoose");
// mongodb://localhost:27017
// mongodb+srv://avibhawnani:demo123@cluster0.j6hemek.mongodb.net/todos
mongoose.connect("mongodb+srv://avibhawnani:demo123@cluster0.j6hemek.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}