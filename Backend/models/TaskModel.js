const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    userid:{type:String},
})

const TaskModel=mongoose.model("task",taskSchema)

module.exports={
    TaskModel
}