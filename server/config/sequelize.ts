const { Sequelize } = require("sequelize-typescript");

// Change localhost to the host to use
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
