const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //paths
        this.paths = {
            users: '/api/register'
        }

        // middlewares
        this.middlewares();

        //aplication routes
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        
        // read and parse from the body
        this.app.use( express.json() );


        //Public Folder
        this.app.use( express.static( 'public' ) );

    }

    routes() {
        this.app.use(this.paths.users, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}

module.exports = Server;