import AppServiceProvider from 'Provider/AppServiceProvider';
import { server_config } from 'Configs/server';

const app_service_provider = new AppServiceProvider();
const app = app_service_provider.boot();
app.listen(server_config.port, server_config.base_uri);
