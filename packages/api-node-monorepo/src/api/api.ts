import { Application } from 'express';

import { InfoApi } from './info/info.api';

export class Routes {
  private infoApi: InfoApi;

  constructor() {
    this.infoApi = new InfoApi();
  }

  public routes(app: Application): void {
    this.infoApi.routes(app);
  }
}
