import express from 'express';
import cors from 'cors';

import usersRoutes from "../routes/users.js";

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
       
        this.paths = {
            users: '/api/users'
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use(this.paths.users, usersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}

export default Server;