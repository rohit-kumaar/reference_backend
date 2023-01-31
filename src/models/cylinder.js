import mongoose from "mongoose";
const cylinderSchema = new mongoose.Schema({
    
batchId:{
    type:Number,
    required:true
},
filledStatus:{
    type:Boolean,
    required:true,
    enum:[true,false],  //true for filled cylinder
    default: true,      //false for empty cylinder 
},
replacementRequest:{
    type:Boolean,
    required:true,
    enum:[true,false]  // true for 
},
status: {
    type: Number,
    enum : [0,1], // 0 for Inactive batch
    default: 1    // 1 for Active batch
}
},{timestamps:true})

// module.exports = mongoose.model('cylinder',cylinderSchema);
const CylinderModel = mongoose.model("cylinder",cylinderSchema)
export default CylinderModel