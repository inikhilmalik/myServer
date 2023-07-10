const express=require("express");
const { dataModal } = require("../models/data.model");

const dataRouter=express.Router();

dataRouter.get("/",async(req,res)=>{
    try{
        const data=await dataModal.find();
        res.send(data)
    }catch(err){
        res.send({"err":err.message})
    }
})

dataRouter.post("/create",async(req,res)=>{
    try{
        const data=new dataModal(req.body);
        await data.save();
        res.send("data is added")
    }catch(err){
        res.send({"err":err.message})
    }
})

dataRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    // console.log(id)
    try{
        await dataModal.findByIdAndUpdate({_id:id},req.body);
        res.send("data is updated")
    }catch(err){
        res.send({"err":err.message})
    }
})

dataRouter.post("/updateData",async(req,res)=>{
    // console.log(req.body)
    try{
        await dataModal.deleteMany({})
        await dataModal.insertMany(req.body);
        res.send("updation")
    }catch(err){
        res.send({"err":err.message})
    }
})

module.exports={dataRouter}