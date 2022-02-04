import { request, response } from 'express';
import User from '../models/user.js';

export const usersPost = (req = request, res = response) => {

    const {username, email, password} = req.body;
    const user = new User({ username, email, password });
   
    res.status(201).json({
        message: 'Account created',
        user
    })
}
