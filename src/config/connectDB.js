const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('iprito', 'root', 'Iprito17', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

// Hàm kết nối database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};

module.exports = connectDB;