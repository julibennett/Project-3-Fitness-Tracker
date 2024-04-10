const router = require("express").Router()
const resCtrl = require("../controllers/reservationController")

router.get("/reservation", resCtrl.reservation) 
router.post("/reservation", resCtrl.createRes)      
router.delete("/reservation/:id", resCtrl.destroyRes) 


module.exports = router