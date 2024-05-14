const express=require('express')
const mongoose=require('mongoose')
const dotenv= require('dotenv').config()
const path=require('path')
const cors=require('cors')
const DBConnection= require('./config/ConnectionDB')
const AdminRouter=require('./routes/Admin')
const userRouter=require('./routes/User')
const adminModal = require('./modals/AdminDetails')

const app=express()
DBConnection();
app.use(express.json())
app.use(cors())



app.post('/login',async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    try{
        const admin = await adminModal.find({email:email})
        
        if(admin[0].password == password){
            res.send('success')
        }
        else{
           res.send("passwordIncorrect")
        }
    }
    catch(err){
       res.send("Invalid")
    }
    

})



app.use('/admin',AdminRouter)

app.use('/user',userRouter)
app.listen(process.env.PORT,(err)=>{
    if(err){
        throw err
    }
    console.log("port is runnting on, ",process.env.PORT);
})

process.on("uncaughtException",(err)=>{
    console.log(err.message);
})