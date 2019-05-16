import express from 'express';
import ServiceProvider from './ServiceProvider';
import { router } from 'Routes/web';

export default class WebServiceProvider extends ServiceProvider {
  boot() {
    this.app = express();
    this.app.use(router);
  }

  getService() {
    return this.app;
  }
}
