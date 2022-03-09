import { request, response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import User from "../models/user.js";


export const login = async (req = request, res = response) => {

    const { email, password } = req.body;
    
    try {
    
        const user = await User.findOne({email});
        
        if (!user) {
            return res.status(400).json({
                message: `There is no account with the email: ${email}`            
            });
        }

        if (!user.active) {
            return res.status(400).json({
                message: `The account is disabled`
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            res.status(400).json({
                message: `The password is not correct`
            });
        }

        let token = jwt.sign({
            id: user._id
          }, process.env.API_SECRET, {
            expiresIn: 86400
          });
        
            
        res.status(200)
        .json({
        user: {
            id: user._id,
            email: user.email,
        },
        message: "Login successfull",
        accessToken: token,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Talk with the administator'
        })
    }
}