import { request, response } from 'express';
import { validationResult } from 'express-validator';

export const titleRequired = (req = request, res = response, next) =>{

  const queryTitle = req.query.title;

  if (!queryTitle) {
    return res.status(400).json({
      message: 'The title is required'
    });
  }

  next();
};

export const validateFields = (req = request, res = response, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.errors[0].msg
    });
  }

  next();
};
