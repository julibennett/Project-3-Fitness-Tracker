const router = require("express").Router()
const resCtrl = require("./controllers/reservationController")

router.get("/reservation", resCtrl.reservation)
router.post("/reservation", resCtrl.create)
router.delete("/reservation/:id", resCtrl.destroy)

module.exports = router