import mongoose from "mongoose";

const siteSchema = new mongoose.Schema({
    siteName: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    distributorId: {
        required:false,
        type : mongoose.Schema.Types.ObjectId,  
    },
    contractorId: {
        required:false,
        type : mongoose.Schema.Types.ObjectId,   
    },
    status: {
        type: Number,    
        enum: [0, 1],
        default: 0
    },
},
    { timestamps: true }
);

export default mongoose.model("sites", siteSchema);
