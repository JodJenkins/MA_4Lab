require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

request = require('request')
const MicroMQ = require('micromq');

const PORT = process.env.PORT || 27017

const rabApp = new MicroMQ({
    name: 'lesson_app',
    rabbit: {
    url: 'amqp://rabbitmq:5672',
  },
});

rabApp.get('/getLessons', (req, res) => {
    request(
      'http://lessons_app:27017/api/lesson/get',
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