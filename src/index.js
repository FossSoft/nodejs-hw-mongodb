import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

const initApp = async () => {
  await initMongoConnection();
  setupServer();
};
initApp();
