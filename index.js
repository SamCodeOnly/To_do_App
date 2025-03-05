import app from "./app.js"

const PORT = process.env.PORT || 8000



// listen server
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})