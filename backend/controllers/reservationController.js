const {Reservation} = require('../models/Class.js')

//Reservation Index Page
const reservation = async (req, res) => {
    try {
        const reservations = await Reservation.find()
        if(!reservations){
            res.status(400).json({message: "Cannot find reservations"})
        } else {
            res.status(200).json({data: reservations})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//-->