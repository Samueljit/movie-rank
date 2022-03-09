import authRoutes from '../routes/auth.js';
import cors from 'cors';
import dbConnection from '../DB/config.js';
import express from 'express';
import moviesRoutes from '../routes/movies.js';
import usersRoutes from '../routes/users.js';

class Server {

  constructor() {

    this.app = express();
    this.port = process.env.PORT;
       
        this.paths = {
            users: '/api/users',
            movies: '/api/movies',
            auth: '/api/auth'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use(this.paths.users, usersRoutes);
        this.app.use(this.paths.movies, moviesRoutes);
        this.app.use(this.paths.auth, authRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}

export default Server;