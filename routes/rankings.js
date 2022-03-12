import { check } from 'express-validator';
import { rankingsPost } from '../controllers/rankings.js';
import Router from 'express';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Router();

router.post('/',[
  validateJWT,
  check('movies', 'The field movies is required').not().isEmpty(),
  check('movies', 'The field movies must have a length of 10').isLength({ min: 10 }),
  validateFields
], rankingsPost);

export default router;
