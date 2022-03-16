import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MovieRankingSchema = Schema({
  userId: {
    type: String,
    required: [true, 'The userId is required']
  },
  movies: [
    {
      position: {
        type: Number,
        required: [true, 'The position is required']
      },
      title: {
        type: String,
        required: [true, 'The title is required']
      },
      overview: {
        type: String,
        required: [true, 'The overview is required']
      },
      release_date: {
        type: String,
        required: [true, 'The release_date is required']
      },
      poster_path: {
        type: String,
        required: [true, 'The poster_path is required']
      },
    }
  ]
});

MovieRankingSchema.methods.toJSON = function() {
  const { __v, ...movieRankings  } = this.toObject();
  
  return movieRankings;
};

export default model('MovieRanking', MovieRankingSchema);