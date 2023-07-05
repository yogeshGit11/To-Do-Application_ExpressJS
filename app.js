import express from 'express'
import dbConnect from './database/connection.js'
import route from './routes/web.js'

const app=express()

app.use(express.static('public'))
app.use('/editTask',express.static('public'))

dbConnect()

app.use(express.urlencoded({extended:true}))

app.use('/',route)

app.listen(2000,()=>{
	console.log('server is running at http://localhost:2000/')
})