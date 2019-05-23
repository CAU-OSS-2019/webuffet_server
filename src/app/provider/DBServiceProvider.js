import ServiceProvider from './ServiceProvider';
import DBConnector from 'DB/DBConnector';

export default class DBServiceProvider extends ServiceProvider {
  constructor() {
    super();
    this.dbConnector = new DBConnector();
  }

  async boot() {
    await this.dbConnector.connect();
    
    return Promise.resolve();
  }
}
