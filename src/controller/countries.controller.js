

const express=require("express")

const router=express.Router()

const Country=require("../model/countries.model")

router.get("/",async(req,res)=>{
    try {
        
        const countries=await Country.find().lean().exec();

         res.send(countries);
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/",async(req,res)=>{
    try {
        const country=await Country.create(req.body);

        res.send(country);
    } catch (error) {
        res.send(error.message)
    }
})


module.exports=router;