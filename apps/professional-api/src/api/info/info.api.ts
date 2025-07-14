import { Request, Response, NextFunction, Express } from 'express';
import InfoController from './info.controller';

const InfoApi = (app: Express) => {
  const defaultPath = '/info';
  const controller = InfoController(app);
  app.get(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getInfos()
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.get(defaultPath+"/erro", async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getInfosErro()
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });
};

export default InfoApi;
