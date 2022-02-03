const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {usersPost} = require('../controllers/users');
const {validateFields} = require('../middlewares/validate-fields');



router.post('/', [
    check('username','The username is required').not().isEmpty(),
    check('password', 'The password must have more than 6 letters').isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    validateFields
], usersPost);



module.exports = router;