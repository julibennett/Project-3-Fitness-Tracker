const router = require("express").Router()
const classCtrl = require("../controllers/classController")

router.get("/", classCtrl.home)
router.get("/:id", classCtrl.show)

module.exports = router