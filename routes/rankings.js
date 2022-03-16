import { rankingsGet,
  rankingsGetAll,
  rankingsPost,
  rankingsPut } from '../controllers/rankings.js';
import { check } from 'express-validator';
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

router.get('/', [validateJWT], rankingsGetAll);

router.get('/:id', [
  validateJWT,
  check('id','The id is invalid').isMongoId(),
  validateFields
], rankingsGet);

router.put('/:id', [
  validateJWT,
  check('movies', 'The field movies is required').not().isEmpty(),
  check('movies', 'The field movies must have a length of 10').isLength({ min: 10 }),
  validateFields
], rankingsPut);

export default router;
