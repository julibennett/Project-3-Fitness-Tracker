const {Reservation} = require('../models/Reservation.js')

//Index 
const reservation = async (req, res) => {
    try {
        const reservations = await Reservation.find()
        if(!reservations){
            res.status(400).json({message: 'Cannot find reservations.'})
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
        const createdRes = await Reservation.create(req.body)
        createdRes.save()
        if(!createdRes){
            res.status(400).json({message: 'Cannot create the reservation.'})
        } else {
            res.status(201).json({data: createdRes, message: 'Reservation was created.'})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

//Delete
const destroy = async (req, res) => {
    try {
        const index = req.params.id
        const deletedRes = await Reservation.findByIdAndDelete(index)
        if(deleteRes){
            res.status(200).json({message: 'The reservation was deleted.'})
        } else {
            res.status(200).json({data: deletedRes, message: 'Could not delete reservation'})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

module.exports ={
    reservation,
    create,
    destroy,
}