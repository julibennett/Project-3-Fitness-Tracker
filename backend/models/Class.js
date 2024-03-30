const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    username: {type: String, required: true},
    comments: [String],
    date: String,
})

const Review = mongoose.model('Review', reviewSchema)

const classSchema = new mongoose.Schema({
    typeOfClass: {type: String, required: true},
    location: {type: String, required: true},
    time: {type: Time, required: true},
    studio: {type: String, required: true},
    instructor: {type: String, required: true},
    review: [reviewSchema],
})

const Class = mongoose.model('Class', classSchema)

module.exports = {Review, Class}