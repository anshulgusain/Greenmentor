const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://anshulgusain99:AQr5L1nlNZeN05WW@cluster0.vwiwavz.mongodb.net/greenmentor")

module.exports={
    connection
}