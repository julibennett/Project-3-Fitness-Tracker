const Reservation = require('../models/Reservation.js')
const {Review, Class} = require('../models/Class.js')

//Index 
// const reservation = async (req, res) => {
//     try {
//         // Assuming 'classId' is stored in each Reservation document as a reference to a Class document
       
//         const reservations = await Reservation.find().populate('classId');
       
//         if (reservations.length === 0) {
//             res.status(404).json({message: 'No reservations found.'})
//         } else {
//             // Transforming data to include class details more clearly
//             const reservationsWithClassDetails = reservations.map(res => ({
//                 ...res.toObject(),
//                 className: res.classId.typeOfClass,  
//                 classType: res.classId.typeOfClass,  
//                 classLocation: res.classId.location  
//             }));
//             res.status(200).json({data: reservationsWithClassDetails})
//             console.log(data)
//         }
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

const reservation = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('classId');
        if (!reservations.length) {
            return res.status(404).json({ message: 'No reservations found.' });
        }
        res.status(200).json({ data: reservations });  // Sending back populated data
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


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