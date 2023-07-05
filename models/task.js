import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    task:{type:String,required:true},
    date:{type:Date,default:(new Date()).getTime()}
})

const taskModel=mongoose.model('alltask',taskSchema)

export default taskModel