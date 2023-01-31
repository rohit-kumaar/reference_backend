import express from 'express';
const router = express.Router();
import {addBatch,updateBatch,deleteBatch,viewBatch} from './controller.js';
import {batchRules, validationCheck} from '../../../middleware/validation.js';
import { checkAdminAuth } from '../../../middleware/authentication.js';

export default [
    router.post('/batch',checkAdminAuth,[batchRules,validationCheck, addBatch]),
    router.delete('/batch/:id',checkAdminAuth, deleteBatch),
    router.put('/batch/:id',checkAdminAuth,[batchRules,validationCheck,updateBatch]),
    router.get('/batch',checkAdminAuth,viewBatch)
]