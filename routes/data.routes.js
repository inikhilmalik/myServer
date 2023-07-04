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

module.exports={dataRouter}