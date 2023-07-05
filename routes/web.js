import express from 'express'
import TaskManagement from '../controller/taskController.js'

const route=express.Router()

route.get('/',TaskManagement.showTask)
route.get('/add',TaskManagement.addTask)
route.post('/createTask',TaskManagement.createTask)
route.get('/editTask/:id',TaskManagement.editTask)
route.post('/updateTask/:id',TaskManagement.updateTask)
route.post('/deleteTask/:id',TaskManagement.deleteTask)

export default route