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
        message: 'The movie ranking not found'
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

export const rankingsPut = async (req = request, res = response) => {

  try {
    
    const {id} = req.params;
    const {movies} = req.body;
    
    const movieRanking = await MovieRanking.findByIdAndUpdate(id, {movies});
    if (!movieRanking) {
      return res.status(404).json({
        message: 'The movie rankings not found'
      });
    }

    res.status(200).json({
      message: 'Movie rankings successfully updated'
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const rankingsDelete = async (req = request, res = response) => {

  try {
    
    const { id } = req.params;
    const deletedMovieRanking = await MovieRanking.findByIdAndDelete(id);
    if (!deletedMovieRanking) {
      return res.status(404).json({
        message: 'The movie rankings not found'
      });
    }

    res.status(200).json({
      message: 'Movie rankings successfully deleted'
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });  
  }
};
