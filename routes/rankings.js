import { rankingsGet,
  rankingsGetAll,
  rankingsPost,
  rankingsPut,
  rankingsDelete } from '../controllers/rankings.js';
import { check } from 'express-validator';
import Router from 'express';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Router();

router.post('/',[
  validateJWT,
  check('movies', 'The field movies is required').not().isEmpty(),
  check('movies', 'The field movies must have a length of 10').isArray({ min: 10, max: 10 }),
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
  check('movies', 'The field movies must have a length of 10').isArray({ min: 10, max: 10 }),
  validateFields
], rankingsPut);

router.delete('/:id', [
  validateJWT,
  check('id', 'The provided id is not valid').isMongoId(),
  validateFields
], rankingsDelete);

export default router;
