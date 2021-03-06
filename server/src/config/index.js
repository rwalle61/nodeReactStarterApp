/* istanbul ignore next */
const env = process.env.NODE_ENV || 'development';

// available levels: ['error', 'warn', 'info', 'debug', 'trace']
/* istanbul ignore next */
const determineLogLevel = (environment) => {
  if (environment === 'production' || environment === 'staging') {
    return 'info';
  }
  return 'debug';
};

module.exports = {
  ...require(`./${env}`), // eslint-disable-line import/no-dynamic-require, global-require
  defaultLogLevel: determineLogLevel(env),
};
