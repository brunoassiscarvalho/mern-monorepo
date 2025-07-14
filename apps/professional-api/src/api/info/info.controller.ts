import { Express } from "express";
import BusinessException from "../../exceptions/BusinessException";
import { IInfo } from "@chronos/interfaces";

const InfoController = (app: Express) => {
  const getInfos = async (): Promise<IInfo> => {
    return {
      name: "Chronos Professional API",
      version: "1.0.0",
      description: "API for professional management in the Chronos system",
      databaseStatus: "Connected",
      serverStatus: "Running",
    };
  };

  const getInfosErro = async (): Promise<string> => {
    throw new BusinessException("Testes de erro da aplicação");
  };

  return { getInfos, getInfosErro };
};

export default InfoController;
