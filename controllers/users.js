const {request, response} = require('express');
const User = require('../models/user');

const usersPost = (req = request, res = response) => {

    const {username, email, password} = req.body;
    const user = new User({ username, email, password });
   
    res.status(201).json({
        message: 'Account created',
        user
    })
}

module.exports = {
    usersPost
}