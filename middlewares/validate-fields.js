const { validationResult } = require('express-validator');
const {response} = require('express')



const validateFields = (req, res = response, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Bad Request",
            errors
        })
    }

    next();

}

module.exports = {
    validateFields
}