import { Router } from 'express';
import { check } from 'express-validator';
import { movieGet } from '../controllers/movies.js';


const router = Router();

router.get('/search', movieGet);


export default router;