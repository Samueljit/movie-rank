import { Router } from 'express';
import { check } from 'express-validator';

import { usersPost, 
         userGetAll, 
         userGet, 
         userPut } from '../controllers/users.js';

import { validateFields } from '../middlewares/validate-fields.js';
import {hasRepeatedEmail, isValidRole, isExistingUser} from '../helpers/validationDB.js'

const router = Router();

router.get('/', userGetAll);

router.get('/:id', [
    check('id', 'The provided id is not valid').isMongoId(),
    validateFields
    ], userGet);

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
], userPut);

export default router;