import { Router } from 'express';
import { movieGet } from '../controllers/movies.js';
import { titleRequired, validateFields } from '../middlewares/validate-fields.js'

const router = Router();

router.get('/search', [
    titleRequired, 
    validateFields], 
    movieGet);


export default router;