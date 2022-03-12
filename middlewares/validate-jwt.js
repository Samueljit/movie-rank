import { request, response } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const validateJWT = async (req = request, res = response, next) => {

    const token = req.header('pup-token');

    if (!token) {
        return res.status(401).json({
            message: 'There is no token in the request'
        });
    }

    try {
   
        const { id } = jwt.verify(token, process.env.API_SECRET);
        
        req.id = id;
        
        const user = await User.findById(id);

        req.user = user;

        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Invalid token'
        });
    }
}