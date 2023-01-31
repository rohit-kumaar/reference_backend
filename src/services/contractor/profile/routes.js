import express from 'express';
const router = express.Router();
import getProfile from './controller.js';

export default [
  router.get('/profile/:id',getProfile),
]
