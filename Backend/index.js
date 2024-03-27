// ALL IMPORTS

const express =require("express")
const { connection } = require("mongoose")
const { UserModel } = require("./models/UserModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { TaskModel } = require("./models/TaskModel");
const { authenticate } = require("./middlewares/authenticate");

// All IMPORTS END

const app=express()
app.use(express.json)




app.get("/",(req,res)=>{
    res.send("Base Api")
})


// LOGIN AND SIGUP API
app.post("/signup",async(req,res)=>{
    const {name,email,mobile,password}=req.body
    bcrypt.hash(password,5,async function(err,hash){
        await UserModel.create({name,email,mobile,password:hash})
        res.send("You are Registered")
    })
})

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})
    const hash=user.password
    if(user){
        bcrypt.compare(password,hash,async function(err,result){
            if(result){
                var token = jwt.sign({ userid:user._id }, 'shhhhh');
                res.send({msg:"Logged in Successfully",token:token})
            }
            else{
                res.send("Wrong Password")
            }
        })
    }else{
        res.send("Sign up first")
    }
})

// SIGNUP AND LOGIN API END

// CRUD API START
app.use(authenticate)
app.get("task",async(req,res)=>{
    const data=await TaskModel.find(req.query)
    res.send({data})
})

app.post("/task/add",async(req,res)=>{
    const {title,description}=req.body
    const userid=req.userid
    try{
        await TaskModel.create({title,description})
        res.send("Task Added Succsessfully")
    }catch(err){
        console.log(err)
        res.send("Error in Creating Task")
    }

})

app.put("/task/edit/:id",async (req,res)=>{
    const {id}=req.params
    const userid=req.userid
    const {title,description}=req.body
    try{
        if(id===userid){
         await TaskModel.findByIdAndUpdate(id,{title,description})
         res.send("Edited Successfully")
        }else{
            res.send("Not Authorised")
        }
    }catch(err){
        console.log(err)
        res.send("Something Wrong in Editing Task")
    }
})

app.delete("/task/delete/:id",async (req,res)=>{
    const {id}=req.params
    const userid=req.userid

    try{
        if(id===userid){
         await TaskModel.findByIdAndDelete(id)
         res.send("Deleted Successfully")
        }else{
            res.send("Not Authorised")
        }
    }catch(err){
        console.log(err)
        res.send("Something Wrong in Deleting Task")
    }
})

// CRUD API START END

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Listening to port 8080")
    }catch(err){
        console.log(err)
    }
})