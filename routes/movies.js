import { moviesGet } from '../controllers/movies.js';
import { Router } from 'express';
import { titleRequired } from '../middlewares/validate-fields.js';

const router = Router();

router.get('/search', [titleRequired], moviesGet);

export default router;