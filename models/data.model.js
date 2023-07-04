const mongoose=require("mongoose");

const dataSchema=mongoose.Schema({
        category: String,
        priority: String,
        activity: String,
        planned: Number,
        startDate: String,
        endDate: String,
        dependOn: Number,
        precurserTask:String,
        status: String,
        taskOwner: String
},{
    versionKey:false
})

const dataModal=mongoose.model("data",dataSchema);

module.exports={dataModal};