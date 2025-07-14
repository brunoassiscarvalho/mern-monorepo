import express, { Express } from 'express';
import cors from 'cors';
import { logger } from './logger/winston';
import errorMiddleware from './middleware/error.middleware';
import api from './api/api';
import startMongo from './core/dataBase';

import configurations from './core/configurations';

const app: Express = express();
const port = configurations.APP.port;

startMongo(configurations.MONGO);

app.use(
  cors({
    origin: configurations.APP.clients,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(errorMiddleware);

api(app);

app.listen(port, () => {
  logger.info(`Express server listening on port ${port}`);
  logger.info(configurations.APP.clients);
});
