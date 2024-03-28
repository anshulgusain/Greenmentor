const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://anshulgusain99:bpNvViq9cviT07r7@cluster0.vwiwavz.mongodb.net/greenmentor")

module.exports={
    connection
}