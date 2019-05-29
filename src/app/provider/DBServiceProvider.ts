import ServiceProvider from './ServiceProvider';
import DBConnector from 'DB/DBConnector';

export default class DBServiceProvider implements ServiceProvider {
  private dbConnector: DBConnector;

  constructor() {
    this.dbConnector = new DBConnector();
  }

  public async boot(): Promise<void> {
    await this.dbConnector.connect();
    
    return Promise.resolve();
  }
}
