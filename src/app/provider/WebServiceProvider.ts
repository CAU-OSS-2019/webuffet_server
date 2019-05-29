import express, { Express } from 'express';
import ServiceProvider from './ServiceProvider';
import web_router from 'Routes/web/index';

export default class WebServiceProvider implements ServiceProvider {
  private app: Express;
  
  constructor() {
    this.app = express();
  }

  public boot(): Express {
    this.app.use(web_router);
    
    return this.app;
  }
}
