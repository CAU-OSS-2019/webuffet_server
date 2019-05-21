import express from 'express';
import cors from 'cors';
import ServiceProvider from './ServiceProvider';
import DBServiceProvider from './DBServiceProvider';
import WebServiceProvider from './WebServiceProvider';

export default class AppServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.dbServiceProvider = new DBServiceProvider();
    this.webServiceProvider = new WebServiceProvider();
    this.app = express();
  }

  boot() {
    this.dbServiceProvider.boot();  // asynchronous
    const web_service = this.webServiceProvider.boot();

    this.app.use(cors());
    this.app.use('/', web_service);

    return this.app;
  }
}
