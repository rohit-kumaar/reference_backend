import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batchId : {
        type : Number,
        required : true,
        unique: true
    },
    batchName : {
        type : String,
        required : true,
        unique : true,
        trim:true
    },
    status: {
        type: Number,
        enum : [0,1], // 0 for Inactive batch
        default: 1    // 1 for Active batch
    }
},{ timestamps: true })

const BatchModel= mongoose.model("batch", batchSchema)
export default BatchModel;