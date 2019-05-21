import express from 'express';
import ServiceProvider from './ServiceProvider';
import { router } from 'Routes/web';

export default class WebServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.app = express();
  }

  boot() {
    this.app.use(router);
    
    return this.app;
  }
}
