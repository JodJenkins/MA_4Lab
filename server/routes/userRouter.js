const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.get('/get', userController.get)
router.get('/registration', userController.registration)

module.exports = router