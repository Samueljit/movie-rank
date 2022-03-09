import mongoose from 'mongoose';

const dbConnection = async() => {

  try {
    await mongoose.connect(process.env.MONGODB_MOVIE_RANK);
    console.log('Data Base ONLINE');
  } catch (error) {
    console.log(error);
    throw new Error('Error when starting the database');
  }
};

export default dbConnection;