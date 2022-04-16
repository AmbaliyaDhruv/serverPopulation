

const express=require("express")

const router=express.Router()

const City=require("../model/cities.model")

router.get("/",async(req,res)=>{
    try {
        
        const city=await City.find().lean().exec();

         res.send(city);
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/",async(req,res)=>{
    try {
        const city=await City.create(req.body);

        res.send(city);
    } catch (error) {
        res.send(error.message)
    }
})


router.patch("/:id",async(req,res)=>{
  try {
       const city=await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

       res.send(city);
  } catch (error) {
      res.send(error.message)
  }
})

router.delete("/:id",async(req,res)=>{
    try {
        const city=await City.findByIdAndDelete(req.params.id).lean().exec();

        res.send(city);
    } catch (error) {
        res.send(error.message)
    }
})


module.exports=router;