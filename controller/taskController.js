import { render } from "ejs";
import taskModel from "../models/task.js";

class TaskManagement {
    static showTask = async (req, res) => {
        try {
            const result = await taskModel.find()
            res.render('home.ejs', { data: result })
        } catch (error) {
            console.log(error)
        }
    }

    static addTask = (req, res) => {
        res.render('add.ejs')
    }

    static createTask = async (req, res) => {
        const { task } = req.body
        try {
            const result = taskModel({
                task: task
            })
            await result.save()
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
    static editTask = async (req, res) => {
        try {
            const result = await taskModel.findById(req.params.id)
            res.render('edit.ejs', { data: result })
        } catch (error) {
            console.log(error)
        }
    }

    static updateTask=async(req,res)=>{
        try {
            await taskModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }

    static deleteTask=async(req,res)=>{
        try {
            await taskModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

export default TaskManagement