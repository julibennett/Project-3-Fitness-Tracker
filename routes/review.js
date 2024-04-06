const router = require("express").Router()
const reviewCtrl = require("../controllers/reviewController")

//router.get("/class/:id/review/new", reviewCtrl.new)
router.post("/class/:id/review", reviewCtrl.create)
router.put("/class/:id/review/:reviewId/", reviewCtrl.edit)
router.delete("/class/:id/review/:reviewId", reviewCtrl.destroy)

module.exports = router