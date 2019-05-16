import express from 'express';
import cors from 'cors';
import ServiceProvider from './ServiceProvider';
import WebServiceProvider from './WebServiceProvider';

export default class AppServiceProvider extends ServiceProvider {
  boot() {
    const web_service = new WebServiceProvider();
    web_service.boot();

    this.app = express();
    this.app.use(cors());
    this.app.use('/', web_service.getService());
  }

  getService() {
    return this.app;
  }
}
