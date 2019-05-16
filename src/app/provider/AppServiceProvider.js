import express from 'express';
import cors from 'cors';
import WebServiceProvider from './WebServiceProvider';

export default class AppServiceProvider {
  static boot() {
    const app = express();

    app.use(cors());
    app.use('/', WebServiceProvider.boot());

    return app;
  }
}
