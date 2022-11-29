const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.POSTGRES_NAME,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
    }
)

/*const {Client} = require('pg')

const client = new Client(
    process.env.POSTGRES_NAME,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
    }
)

module.exports = client */