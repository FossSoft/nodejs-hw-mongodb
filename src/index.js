import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};
void bootstrap();

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

// export const SMTP = {
//   SMTP_HOST: 'SMTP_HOST',
//   SMTP_PORT: 'SMTP_PORT',
//   SMTP_USER: 'SMTP_USER',
//   SMTP_PASSWORD: 'SMTP_PASSWORD',
//   SMTP_FROM: 'SMTP_FROM',
// };
