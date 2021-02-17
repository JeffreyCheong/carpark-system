// lib/app.ts
import "reflect-metadata";
import { createConnection } from "typeorm";
import express = require('express');
import helmet = require('helmet');
import cors = require('cors');
import routes from './routes';
require('dotenv').config()

createConnection()
  .then(async connection => {
    //   console.log(connection)
    // Create a new express application instance
    const app: express.Application = express();
    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    //Set all routes from routes folder
    app.use("/", routes);

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
  }).catch(error => console.log(error));
