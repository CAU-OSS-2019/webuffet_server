import express from 'express';
import ServiceProvider from './ServiceProvider';
import web_router from 'Routes/web/index';

export default class WebServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.app = express();
  }

  boot() {
    this.app.use(web_router);
    
    return this.app;
  }
}
