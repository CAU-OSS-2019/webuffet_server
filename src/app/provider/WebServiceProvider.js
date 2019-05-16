import express from 'express';
import { router } from 'Routes/web';

export default class WebServiceProvider {
  static boot() {
    const app = express();
    app.use(router);

    return app;
  }
}
