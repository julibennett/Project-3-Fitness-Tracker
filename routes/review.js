const router = require("express").Router()
const reviewCtrl = require("../controllers/reviewController")
const { verifyToken } = require("../middleware/verifyToken")
//router.get("/class/:id/review/new", reviewCtrl.new)
router.post("/class/:id/review", verifyToken, reviewCtrl.create)
router.put("/class/:id/review/:reviewId/", verifyToken, reviewCtrl.edit)
router.delete("/class/:id/review/:reviewId", verifyToken, reviewCtrl.destroy)
module.exports = router