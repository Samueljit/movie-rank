import { request, response } from 'express';
import MovieRanking from '../models/rankings.js';

export const rankingsPost = async (req = request, res = response) => {

  try {
        
    const userId = req.id; 
    const { movies } = req.body;
    
    const movieRanking = new MovieRanking({
      userId,
      movies
    });

    movieRanking.save();
        
    res.status(201).json({
      message: 'MovieRanking created successfully'
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};