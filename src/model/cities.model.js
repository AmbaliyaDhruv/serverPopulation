
const mongoose=require("mongoose")

const citiesSchema=new mongoose.Schema({
    cityname:{type:String,required:true},
    population:{type:Number,required:true},
    country:{type:String,required:true}
},{
    versionKey:false,
    timestamp:true
})

const City=mongoose.model("cities",citiesSchema)


module.exports=City