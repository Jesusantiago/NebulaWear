const { Sequelize } = require("sequelize-typescript");
const path = require('path');
const dbConfig = require("./dbConfig");

const { database, username, password, host, port, dialect } = dbConfig[process.env.NODE_ENV];

const sequelize = new Sequelize({
  database,
  username,
  password,
  host,
  port,
  dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: process.env.NODE_ENV === 'development' ? false : true
    }
  },
  models: [path.resolve(__dirname, '../models')],
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully!');
  } catch(err) {
    console.log('Connection failed!:', err)
  }
}

testConnection();

export default sequelize;
