import mongoose from "mongoose";

const dbConnect=()=>{
    const DB={
        dbName:'todo'
    }
    try {
        mongoose.connect('mongodb://0.0.0.0:27017',DB)
        console.log('Database Connected Successfully!!!')
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect