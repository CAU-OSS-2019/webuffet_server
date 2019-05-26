import express from 'express';
import bodyParser from 'body-parser';
import ServiceProvider from './ServiceProvider';
import api_router from 'Routes/api/index';

export default class APIServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.app = express();
  }

  boot() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(api_router);

    return this.app;
  }
}
