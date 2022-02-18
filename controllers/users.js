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

export const userGetAll = async (req = request, res = response) => {

    const {from = 0} = req.query;
    const query = { status: true };

    const [ total, users ] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip( Number(from))
    ]);

    res.json({
        total,
        users
    });    
}
