const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // middlewares
        this.middlewares();

        //aplication routes
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Public Folder
        this.app.use( express.static( 'public' ) );

    }

    routes() {
        // here came the route
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}

module.exports = Server;