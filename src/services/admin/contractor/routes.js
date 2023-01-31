import express from 'express';
// import { validationCheck, validationRules } from './contractorValidation.js';
import { validationCheck, validationRules } from './contractorValidation.js';
const router = express.Router();
// import { addDistributor, getDistributorById, getDistributorByRole, updateDistributor, deleteDistributor } from './controller.js';

import { addContractor, getContractorsByRole, updateContractor, getContractorById, deleteContractor } from './controller.js';

export default [
    router.post('/contractor', [validationRules, validationCheck, addContractor]), //add distributor
    router.get('/contractors', getContractorsByRole), //get all distributors
    router.get('/contractor/:id', getContractorById), //get data by Id
    router.put('/contractor/:id', [validationRules, validationCheck, updateContractor]),  //update data
    router.delete('/contractor/:id', deleteContractor) // delete data

]
