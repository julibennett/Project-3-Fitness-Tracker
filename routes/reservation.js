const router = require("express").Router()
const resCtrl = require("../controllers/reservationController")

router.get("/", resCtrl.reservation) // Accessible at GET /api/reservation/
router.post("/", resCtrl.create)      // Accessible at POST /api/reservation/
router.delete("/:id", resCtrl.destroy) // Accessible at DELETE /api/reservation/:id


module.exports = router