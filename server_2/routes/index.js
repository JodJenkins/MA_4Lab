const Router = require('express')
const router = new Router()

const lessonRouter = require('./lessonRouter')


router.use('/lesson', lessonRouter)

module.exports = router