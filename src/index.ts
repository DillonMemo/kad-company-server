import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import connectionOptions from './ormConfig';
import { createConnection } from 'typeorm';
import { Options } from 'graphql-yoga';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    console.log('connectionOptions', connectionOptions);
    app.start(appOptions, handleAppStart);
  })
  .catch((error) => console.log(error));
