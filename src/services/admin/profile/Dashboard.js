const router = express.Router();
import express from 'express';
import UserModel from "../../../models/user.js";
import SiteModel from "../../../models/site.js";
import BatchModel from "../../../models/batch.js";
import { APIResponse } from "../../../utils/common.js";
import { checkAdminAuth } from '../../../middleware/authentication.js';
import CylinderModel from "../../../models/cylinder.js";


export const Counter = async (req,res) => {


    const distributorCount = await UserModel.countDocuments({role : "distributor"})
    const contractorCount = await  UserModel.countDocuments({role : "contractor"})
    const siteCount= await SiteModel.estimatedDocumentCount();
    const batchCount= await BatchModel.estimatedDocumentCount();
    const count = {
        distributorCount,
        contractorCount,
        siteCount,
        batchCount,
    }

    const response = new APIResponse(1,"got counts",count)
    res.send(response)
}



export const inventoryCounter = async (req,res) => {


    const cylinderCount = await CylinderModel.estimatedDocumentCount();
    const filledCylinderCount = await  CylinderModel.countDocuments({filledStatus : "true"});
    const emptyCylinderCount= await CylinderModel.countDocuments({filledStatus : "false"});
    // const counterfitRiskCylinderCount= await BatchModel.estimatedDocumentCount();
    const replacementRequestCount= await CylinderModel.countDocuments({replacementRequest: "true"});
    const count = {
        cylinderCount,
        filledCylinderCount,
        emptyCylinderCount,
        replacementRequestCount,
    }

    const response = new APIResponse(1,"got counts",count)
    res.send(response)
}

//Dashboard Routes
export default[
    router.get('/count',checkAdminAuth,Counter),
    router.get('/inventory',checkAdminAuth,inventoryCounter)
    ]
