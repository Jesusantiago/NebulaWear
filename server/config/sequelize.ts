const { Sequelize } = require("sequelize-typescript");

const sequelize = new Sequelize(process.env.DATABASE_URI);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully!');
  } catch(err) {
    console.log('Connection failed!:', err)
  }
}

testConnection();
