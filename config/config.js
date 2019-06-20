if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  development: {
    username: process.env.PGUSERNAME,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
}
