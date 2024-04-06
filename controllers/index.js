const router = require('express').Router()
const {verifyToken} = require('../middleware/verifyToken')
const userCtrl = require('../controllers/userControllers')

router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user/:id", verifyToken, userCtrl.getUser)

module.exports = router


