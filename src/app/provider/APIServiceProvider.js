import express from 'express';
import bodyParser from 'body-parser';
import ServiceProvider from './ServiceProvider';
import { router } from 'Routes/api';

export default class APIServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.app = express();
  }

  boot() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(router);

    return this.app;
  }
}
