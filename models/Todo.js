import mongoose from "mongoose"

//{unique: true, maxlenght: 20, minlength: 3, trim: true}
const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: String
}, {timestamps: true})

const Todo = mongoose.model("todo", todoSchema)

export default Todo;