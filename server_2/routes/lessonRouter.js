const Router = require('express')
const router = new Router()
const lessonController = require('../controllers/lessonController')

router.get('/get', lessonController.get)
router.get('/createLesson', lessonController.createLesson)

module.exports = router