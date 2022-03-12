import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TopMovieSchema = Schema({
  movies: [
    {
      position: 'Number',
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 2,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 3,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 4,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 5,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 6,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 7,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 8,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 9,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
    {
      position: 10,
      title: 'String',
      overview: 'String',
      release_date: 'String',
      poster_path: 'String'
    },
  ]
});

export default model('TopMovie', TopMovieSchema);