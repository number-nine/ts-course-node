import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { ServiceInterface } from "types/services";
import { controllers } from "app/domain";
import { middlewares } from "app/middlewares";

export class Tcp implements ServiceInterface {
  private static instance: Tcp;
  private routePrefix = "/api";
  public server = express();

  constructor() {
    if (!Tcp.instance) {
      Tcp.instance = this;
    }

    return Tcp.instance;
  }

  async init() {
    const { server, routePrefix } = this;
    server.use(express.json());

    useExpressServer(server, {
      routePrefix,
      controllers,
      middlewares,
      cors: true,
      defaultErrorHandler: true,
      validation: false,
    });

    return new Promise<boolean>((resolve) => {
      server.listen(400, () => {
        console.log("Tcp service started on port 4000");
        return resolve(true);
      });
    });
  }
}
