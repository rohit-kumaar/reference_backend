import express from 'express';
const router = express.Router();
import getProfile from './controller.js';
import { checkAdminAuth } from '../../../middleware/authentication.js';
export default [
  router.get('/profile/:id',checkAdminAuth ,getProfile),
]
