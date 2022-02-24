import axios from 'axios';

import { request, response } from 'express';


export const movieGet = async (req = request, res = response) => {

    try {

      const queryTitle = req.query.title;
      const jwt = process.env.API_V4_TMDB;
      const url = process.env.MOVIE_SEARCH_URL;

      if (!queryTitle) {
        res.status(400).json({
          message: 'The title is required'
        })
      }

      axios.get(url, {
          headers: {'Authorization': `Bearer ${jwt}`},
          params: {
          query: queryTitle
          }
        })
        .then(response => {
            let results = response.data.results;
            let responseBody = results.map(element => {
              const { title, overview, release_date, poster_path } = element;
              return { title, overview, release_date, poster_path};
            });
            
            res.status(200).json(responseBody);
        
        })
    } catch (error) {
      console.log(error);
    }
}