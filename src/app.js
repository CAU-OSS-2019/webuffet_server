import AppServiceProvider from 'Provider/AppServiceProvider';
import { server_config } from 'Configs/server';

// Boot our app
const app_service = new AppServiceProvider();
app_service.boot();

const app = app_service.getService();
app.listen(server_config.port);
