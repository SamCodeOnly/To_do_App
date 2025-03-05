import Todo from "../models/Todo.js"
import moment from "moment"

const homeController = async (req , res , next)=>{
    try{
        const todos = await Todo.find().sort({createdAt: -1})
        res.locals.moment = moment

        res.render("index", { title: "List Todo", todos})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addTodoFormController = (req, res, next) => {
    try{
        res.render("newTodo" , {title: "New Todo"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const updateTodoFormController = async (req, res ,next ) => {
    try{
        const { id } = req.query
        const todo = await Todo.findById(id)
        res.render("updateTodo", {title: "Update Todo", todo})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const deleteTodoPageController = (req, res, next)=>{
    try{
        const { id } = req.query
        
        res.render("deleteTodo", {title: "Delete Todo", id})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addTodoCotroller =  async (req, res, next)=>{
    try{
        const {title, description} = req.body

        if(!title){
            res.status(400).json({message: "Title is required." })
        }
        const newTodo = new Todo({title, description})
        await newTodo.save()

        res.redirect("/")
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const updateTodoController = async ( req , res, next) => {
    try{ 
        const { id } = req.params
        const { title, description } = req.body

        const todo = await Todo.findById(id)

        if(!todo){
            res.status(404).json({messsage: "Todo do not found!"})
        }
        todo.title = title
        todo.description = description

        await todo.save()

        res.redirect("/")
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const deleteTodoController = async ( req , res, next) => {
    try{
        const { id, confirm } = req.query

        if(confirm === "yes"){
            await Todo.findByIdAndDelete(id)
        }
        res.redirect("/")
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


export default { homeController, 
    addTodoFormController, 
    updateTodoFormController, 
    deleteTodoPageController, 
    addTodoCotroller,
    updateTodoController,
    deleteTodoController
}