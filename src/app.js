import AppServiceProvider from 'Provider/AppServiceProvider';
import { server_config } from 'Configs/server';

const app_service = new AppServiceProvider();
app_service.boot().then((app) => {
  app.listen(server_config.port);   // open server
});
