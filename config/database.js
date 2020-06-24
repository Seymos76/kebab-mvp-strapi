module.exports = ({ env }) => ({
  defaultConnection: 'mongo',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    mongo: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ss1: true,
      },
    },
  },
});
