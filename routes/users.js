import { Router } from 'express';
import { check } from 'express-validator';

import { usersPost } from '../controllers/users.js';
import { validateFields } from '../middlewares/validate-fields.js';

const router = Router();

router.post('/', [
    check('username','The username is required').not().isEmpty(),
    check('password', 'The password must have more than 6 letters').isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    validateFields
], usersPost);

export default router;