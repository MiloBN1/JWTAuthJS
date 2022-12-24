const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const {check} = require('express-validator')
const authMiddleware  = require('./middleware/authMiddleware')
const roleMiddleware  = require('./middleware/roleMiddleware')
router.post('/registration', [
    check('username', 'username can not be empty').notEmpty(),
    check('password', 'password need contain 4-8 characters').isLength({min: 4, max: 8})
],controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER','ADMIN']), controller.getUsers)

module.exports = router