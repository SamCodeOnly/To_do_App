import express from "express"
import todo from "../controller/todo.js"
const router = express.Router()

router.get("/", todo.homeController)

router.get("/add-todo", todo.addTodoFormController)

router.get("/update-todo", todo.updateTodoFormController)

router.get("/delete-todo", todo.deleteTodoPageController)

router.post("/add-todo", todo.addTodoCotroller)

router.post("/update-todo/:id", todo.updateTodoController)

router.get("/confirm-delete", todo.deleteTodoController)

export default router;