const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    app: {
      keys: env.array('APP_KEYS') || 129000,
    },
    useNullAsDefault: true,
  },
});
