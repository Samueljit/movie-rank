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

export const rankingsGetAll = async (req = request, res = response) => {

  try {
    const userId = req.id;
    const movieRankings = await MovieRanking.find({userId});
    
    res.status(200).json({
      movieRankings
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
  
export const rankingsGet = async (req = request, res = response) => {

  try {
    const userId = req.id;
    const movieRankingId = req.params.id;
   
    const movieRanking = await MovieRanking.findById(movieRankingId).where('userId').equals(userId).exec();
    if (!movieRanking) {
      return res.status(404).json({
        message: 'Movie ranking not found'
      });
    }
    res.status(200).json({
      movieRanking
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
