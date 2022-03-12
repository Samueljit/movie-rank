import {hasRepeatedEmail, isExistingUser, isValidRole} from '../helpers/validationDB.js';
import { usersDelete, 
  usersGet, 
  usersGetAll, 
  usersPost, 
  usersPut} from '../controllers/users.js';
import { check } from 'express-validator';
import { Router } from 'express';
import { validateFields } from '../middlewares/validate-fields.js';

const router = Router();

router.get('/', usersGetAll);

router.get('/:id', [
  check('id', 'The provided id is not valid').isMongoId(),
  validateFields
], usersGet);

router.post('/', [
  check('username','The username is required').not().isEmpty(),
  check('password', 'The password must have more than 6 letters').isLength({ min: 6 }),
  check('email', 'The email is not valid').isEmail(),
  check('email').custom(hasRepeatedEmail),
  check('role').custom(isValidRole),
  validateFields
], usersPost);

router.put('/:id', [
  check('id', 'The provided id is not valid').isMongoId(),
  check('id').custom(isExistingUser),
  validateFields
], usersPut);

router.delete('/:id', [
  check('id', 'The provided id is not valid').isMongoId(),
  check('id').custom(isExistingUser),
  validateFields
], usersDelete);

export default router;