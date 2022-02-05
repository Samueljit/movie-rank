import { request, response } from 'express';
import User from '../models/user.js';

export const usersPost = async (req = request, res = response) => {

    const {username, email, password, role} = req.body;
    const user = new User({ username, email, password, role });
   
    await user.save();

    res.status(201).json({
        user
    })
}
