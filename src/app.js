import AppServiceProvider from 'Provider/AppServiceProvider';
import { server_config } from 'Configs/server';

const app = AppServiceProvider.boot();

app.listen(server_config.port);
