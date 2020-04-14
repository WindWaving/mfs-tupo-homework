const config = require('./config')
const Sequelize = require('sequelize');

const seq = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8',
    }
})

module.exports = seq
