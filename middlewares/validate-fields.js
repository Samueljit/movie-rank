import { validationResult } from 'express-validator';
import { response } from 'express';

export const validateFields = (req, res = response, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Bad Request",
            errors
        })
    }

    next();

}
