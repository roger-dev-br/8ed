import { DataBaseConnection } from './database/typeorm.connection';
import { runServer } from './server/express.server';

DataBaseConnection.connect().then(runServer);
