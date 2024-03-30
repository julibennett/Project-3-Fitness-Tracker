const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    classId: {type: Schema.Types.ObjectId, ref: 'Class', required: true},
    attending: {type: Boolean, default: false}
})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation