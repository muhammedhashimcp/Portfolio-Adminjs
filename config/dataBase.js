import mongoose from 'mongoose'
// import {MONGO_URL} from "./config.js"
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {})
        console.log(`MongoDb connected ${connect.connection.host}`)
    } catch (error) {
        console.log("🚀 ~ file: dataBase.js:8 ~ connectDb ~ error:", error)
        console.log(error.message);
        process.exit()
    }   
} 
export default connectDb