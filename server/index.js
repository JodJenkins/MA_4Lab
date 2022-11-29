require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

request = require('request')
const MicroMQ = require('micromq');

const PORT = process.env.PORT || 5000

const rabApp = new MicroMQ({
    name: 'user_app',
    rabbit: {
    url: 'amqp://rabbitmq:5672',
  },
});

rabApp.get('/getUsers', (req, res) => {
    request(
      'http://user_app:5000/api/user/get',
      (err, response, body) => {
        if (err) return res.status(500).send({ message: err })
  
        return res.json(body)
      }
    )
  })

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
rabApp.start()
start()