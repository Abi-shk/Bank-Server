//import .env file
require('dotenv').config()

//server creation 
//express

//import express
const express=require('express')
const router = require('./routes/router')
const cors = require('cors')


//create server using express
const server=express()

// integrate front end
server.use(cors())

//to convert all incoming json to js data
server.use(express.json())

// router set
server.use(router)

//import connection.js file
require('./db/connection')

//server run
//port
const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`_____Server Started Running at Port No: ${port}_____`);
})

//api calls resolve - post
// server.post('/register',(req,res)=>{
//     res.send("working...")
// })

// server.post('/login',(req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login worked")
// })
// server.get('/getexc',(req,res)=>{
//     res.send("get worked")
// })
