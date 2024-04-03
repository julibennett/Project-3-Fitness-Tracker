const Class = require('../models/Class.js').Class
const Review = require('../models/Class.js').Review
const User = require('../models/User.js')

// Create Route
const create = async(req, res) => {
    try{
        const newReview = await Review.create(req.body)
        //const user = await User.findbyId(req.params.userId)
        const foundClass = await Class.findById(req.params.id)
        //console.log(user, 'USER', newReview, 'NEW REVIEW')

        if(!newReview) {
            res.status(400).json({message: 'Cannot find review.'})
        } else {
            foundClass.review.push(newReview)
            await foundClass.save()
            res.status(200).json({data: newReview, message: 'Review created.'})
        }
    } catch(err) {
        console.log(err)
    }
}

// Edit Route
const edit = async(req, res) => {
    try{
        
        // const userId = req.params.userId
        const reviewId = req.params.reviewId

        const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, {new: true})

        if(!updatedReview) {
            res.status(400).json({message: 'Cannot find updated review.'})

        } else {
           res.status(200).json({data: updatedReview, message: 'Review updated.'})
        }

    } catch(err) {
        console.log(err)
    }
}

const destroy = async(req, res) => {
    try{

        // const userId = req.params.userId
        const reviewId = req.params.reviewId
        const classId = req.params.id

        // const foundUser = await User.findById(userId)
        // await foundUser.review.id(reviewId).deleteOne()

        // await foundUser.save()
        // await Review.findByIdAndDelete(reviewId)

        // res.redirect("/class/:id/review")

        // potentially need to reference class as well
        const foundClass = await Class.findById(classId)
        const deletedReview = await foundClass.review.id(reviewId).deleteOne()
        await foundClass.save()

        // const deletedReview = await Review.findByIdAndDelete(reviewId)
    
        if (deletedReview){
            res.status(400).json({message: 'Cannot delete review.'})

        } else {
            res.status(200).json({data: deletedReview, message: 'Review deleted.'})
        }

    } catch(err) {
        console.log(err)
    }
   
}

module.exports = {
    create, 
    edit,
    destroy
}