const Class = require('../models/Class').Class
const Review = require('../models/Class').Review
const User = require('../models/User')
// Create Route
const create = async(req, res) => {
    try{
        const newReview = await Review.create(req.body)
        const foundClass = await Class.findById(req.params.id)
        if(!newReview) {
            res.status(400).json({message: 'Cannot create review.'})
        } else {
            foundClass.review.push(newReview)
            await foundClass.save()
            //console.log(foundClass)
            res.status(200).json({data: newReview, message: 'Review created.'})
        }
    } catch(err) {
        console.log(err)
    }
}
// Edit Route
const edit = async(req, res) => {
    try{        
        const foundClass = await Class.findById(req.params.id);
        // Find the index of the review to update
        const reviewIndex = foundClass.review.findIndex(review => review._id.toString() === req.params.reviewId);
        // Update the review data
        foundClass.review[reviewIndex] = req.body; // Assuming req.body contains the updated review data
        const updatedClass = await foundClass.save();
        /*
        const classId = req.params.id
        const reviewId = req.params.reviewId
        const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, {new: true})
        const updatedClass = await Class.findByIdAndUpdate(classId, req.body, {new: true})
        */
        if(!updatedClass) {
            res.status(400).json({message: 'Cannot find updated review.'})
        } else {
            console.log("Review updated:", updatedClass);
            res.status(200).json({data: updatedClass, message: 'Review updated.'})
        }
    } catch(err) {
        console.log(err)
    }
}
const destroy = async(req, res) => {
    try{
        const reviewId = req.params.reviewId
        const classId = req.params.id
        const foundClass = await Class.findById(classId)
        const deletedReview = await foundClass.review.id(reviewId).deleteOne()
        //fyi, reviews in the review model are not deleted. just those embedded in class.
        await foundClass.save()
        if (!deletedReview) {
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