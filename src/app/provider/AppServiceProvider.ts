import express, { Express } from 'express';
import vhost from 'vhost';
import cors from 'cors';
import ServiceProvider from './ServiceProvider';
import DBServiceProvider from './DBServiceProvider';
import APIServiceProvider from './APIServiceProvider';
import WebServiceProvider from './WebServiceProvider';
import { server_config } from 'Configs/server';

export default class AppServiceProvider implements ServiceProvider {
  private dbServiceProvider: DBServiceProvider;
  private apiServiceProvider: APIServiceProvider;
  private webServiceProvider: WebServiceProvider;
  private app: Express;
  
  constructor() {
    this.dbServiceProvider = new DBServiceProvider();
    this.apiServiceProvider = new APIServiceProvider();
    this.webServiceProvider = new WebServiceProvider();
    this.app = express();
  }

  public boot(): Express {
    this.dbServiceProvider.boot();  // asynchronous
    const api_service = this.apiServiceProvider.boot();
    const web_service = this.webServiceProvider.boot();

    this.app.use(cors());
    this.app.use(vhost("api." + server_config.base_uri, api_service));
    this.app.use(web_service);

    return this.app;
  }
}
