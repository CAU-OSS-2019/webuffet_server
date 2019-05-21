import mongoose from 'mongoose';
import process from 'process';
import logger from 'Configs/log';
import { db_config } from 'Configs/database';

export default class DBConnector {
  async connect() {
    mongoose.connection.on('error', (err) => {
      logger.info("Mongoose default connection has occured " + err + " error");
    });

    await mongoose.connect(db_config.uri, {
      useNewUrlParser: true
    });
  
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        logger.error("Mongoose default connection is disconnected due to application termination");
        process.exit(0);
      });
    });
  }
}
