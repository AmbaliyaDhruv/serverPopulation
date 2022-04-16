
const mongoose=require("mongoose");

const countriesSchema=new mongoose.Schema({
    name:{type:String,required:true}
},{
    versionKey:false,
    timestamp:true
})


const Country=mongoose.model("countries",countriesSchema);

module.exports=Country;