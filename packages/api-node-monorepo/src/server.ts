import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { logger } from './logger/winston';
import errorMiddleware from './middleware/error.middleware';
import { Routes } from './api/api';
import startMongo from './core/dataBase';
import { Configurations } from './core/configurations';

dotenv.config();

class App {
  private configurations = new Configurations();
  private app: Application;

  private PORT: string = this.configurations.APP.port || '3005';

  private routes: Routes = new Routes();

  private allowlist =this.configurations.APP.clients?.split(' ') || [''];

  private corsOptions = {
    origin: this.allowlist,
    optionsSuccessStatus: 204,
  };

  constructor() {
    startMongo();
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.configError();

    this.startServer(this.app, this.PORT);
  }

  private config(): void {
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
  }

  private configError(): void {
    this.app.use(errorMiddleware);
  }

  private startServer(app: Application, PORT: string): void {
    app.listen(process.env.PORT || '3005', () => {
      logger.info(`Express server listening on port ${PORT}`);
    });
  }
}

export default new App();
