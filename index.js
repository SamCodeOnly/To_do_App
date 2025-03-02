import express from "express"
import mongoose from "mongoose"

const app = express()
const PORT = 8000
app.set("view engine" ,"ejs")
app.use(express.json())

const connectionURL = "mongodb://localhost:27017/SchoolDB"
mongoose
    .connect(connectionURL)
    .then(()=>console.log("database successfully connected"))
    .catch((error)=>console.log(error.message))
const studentSchema = mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        dept: String
})
const Student = mongoose.model("student", studentSchema)



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})