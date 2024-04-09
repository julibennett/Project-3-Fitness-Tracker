const {Reservation} = require('../models/Reservation.js')
const {Class} = require('../models/Class.js').Class

//Index 
const reservation = async (req, res) => {
    try {
        const reservations = await Reservation.find()
        if (reservations.length === 0) {
            res.status(404).json({message: 'No reservations found.'})
          } else {
            res.status(200).json({data: reservations})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//Create 
const create = async (req, res) => {
    try {
        const foundClass = await Class.findById(req.body.classId)
        if (!foundClass) {
            return res.status(404).json({message: 'Class not found.'})
        }
        const createdRes = await Reservation.create(req.body)
        res.status(201).json({data: createdRes, message: 'Reservation was created.'})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
};

//Delete
const destroy = async (req, res) => {
    try {
        const deletedRes = await Reservation.findByIdAndDelete(req.params.id)
        if (!deletedRes) {
            res.status(404).json({message: 'Reservation not found or already deleted.'})
        } else {
            res.status(200).json({message: 'The reservation was deleted.', data: deletedRes})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
};


module.exports ={
    reservation,
    create,
    destroy,
}