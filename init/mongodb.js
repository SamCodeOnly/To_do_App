import mongoose from "mongoose"

const connectMongodb = async() => {
    try{
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("datababse connection successfull")
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

export default connectMongodb;