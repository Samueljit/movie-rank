import { request, response } from "express";

export const topPost = (req = request, res = response) => {

    try {
        
        const token = req.header; 
        const movies = req.body;

        
        res.status(201).json({
            message: 'Top10 created successfully',
            id: "",
            movies
        });

        

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}