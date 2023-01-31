import express from 'express';
import { checkAdminAuth } from '../../../middleware/authentication.js';
const router = express.Router();
import { addDistributor, getDistributorById, getDistributorByRole, updateDistributor, deleteDistributor } from './controller.js';
import {userRules, validationCheck} from "../../../middleware/validation.js"

export default [
    router.post('/distributor', checkAdminAuth,[userRules, validationCheck, addDistributor]), //add distributor
    router.get('/distributors', checkAdminAuth,getDistributorByRole), //get all distributors
    router.get('/distributor/:id',checkAdminAuth, getDistributorById), //get data by Id
    router.put('/distributor/:id', checkAdminAuth,[userRules, validationCheck, updateDistributor]),  //update data
    router.delete('/distributor/:id', checkAdminAuth, deleteDistributor), // delete data
]
