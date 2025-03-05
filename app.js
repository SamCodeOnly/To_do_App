import express from "express"
import bodyParser from "body-parser"
import connectMongodb from "./init/mongodb.js"
import todoRoute from "./routes/todo.js"
import dotenv from "dotenv"

dotenv.config()
// init app
const app = express()

// mongodb connection
connectMongodb()

// view engine
app.set("view engine" ,"ejs")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


// route
app.use("/" , todoRoute)

export default app;