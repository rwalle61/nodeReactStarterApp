const app = require('./app');

const Logger = require('./utils/Logger');
const { port } = require('./config');

const log = new Logger(__filename);

app.listen(port, () => {
  log.info(`App running on port ${port}`);
});
