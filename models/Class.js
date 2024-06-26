const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require("../models/User")

const reviewSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    username: {type: String},
    comments: [String],
    date: String,
}, {timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

const classSchema = new mongoose.Schema({
    typeOfClass: {type: String, required: true},
    image: {type: String},
    location: {type: String, required: true},
    time: {type: String, required: true},
    studio: {type: String, required: true},
    instructor: {type: String, required: true},
    review: [reviewSchema],
})

const Class = mongoose.model('Class', classSchema)

module.exports = {Review, Class}


//{type: Date, default: Date.now, required: true}}