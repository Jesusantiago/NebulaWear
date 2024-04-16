const { Sequelize } = require("sequelize-typescript");

const dbName = process.env.DATABASE_NAME as string || '';
const user = process.env.DATABASE_USER as string || '';
const pass = process.env.DATABASE_PASS as string || '';

// Change localhost to the host to use
const sequelize = new Sequelize(`mysql://${user}:${pass}@localhost:3306/${dbName}`);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully!');
  } catch(err) {
    console.log('Connection failed!:', err)
  }
}

testConnection();
