import { movieGet } from '../controllers/movies.js';
import { Router } from 'express';
import { titleRequired } from '../middlewares/validate-fields.js';

const router = Router();

router.get('/search', [titleRequired], movieGet);

export default router;