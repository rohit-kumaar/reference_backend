import mongoose from "mongoose";
const cylinderTracking = new mongoose.Schema({
    contractorId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
    distributorId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        
    },
    sites: [
        {
            siteId: {
                required: false,
                type: mongoose.Schema.Types.ObjectId,
            },
            cylinders:
            {
                required:false,
                type: [mongoose.Schema.Types.ObjectId],
            }
        }
    ]

}, { timestamps: true })

const cylinderTrackingModel =  mongoose.model("cylinderTracking", cylinderTracking);
export default cylinderTrackingModel;