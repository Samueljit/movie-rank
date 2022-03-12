import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const validateJWT = async (req = request, res = response, next) => {

  const token = getTokenFromRequest(req);

  if (!token) {
    return res.status(401).json({
      message: 'There is no token in the request'
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.API_SECRET);
    const user = await User.findById(id);
    
    req.id = id;
    req.user = user;

    next();
        
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: 'Invalid token'
    });
  }
};

const getTokenFromRequest = (req = request) => {
  const authorization = req.headers?.authorization;

  return authorization?.split(' ')[1];
};