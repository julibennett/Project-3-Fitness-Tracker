const router = require("express").Router()
const reviewCtrl = require("./controllers/reviewController")

//router.get("/class/:id/review/new", reviewCtrl.new)
router.post("/class/:id/review", reviewCtrl.create)
router.get("/class/:id/review/:id/edit", reviewCtrl.edit)
router.delete("/class/:id/review/:id", reviewCtrl.destroy)

module.exports = router