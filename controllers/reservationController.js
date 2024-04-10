const {Reservation} = require('../models/Reservation.js')
const {Class} = require('../models/Class.js').Class

//Index 
// const reservation = async (req, res) => {
//     try {
//         const reservations = await Reservation.find()
//         if (reservations.length === 0) {
//             res.status(404).json({message: 'No reservations found.'})
//           } else {
//             res.status(200).json({data: reservations})
//         }
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

const reservation = async (req, res) => {
    try {
        const userId = req.session.currentUser;
        if (!userId) {
            console.log('User ID is not available in the session.');
            return res.status(401).json({ message: 'Not authenticated' });
        }
        const reservations = await Reservation.find({ userId: userId, attending: true })
            .populate({
                path: 'classId',
                model: 'Class'
            });

        const attendingClasses = reservations.map(reservation => {
            return {
                ...reservation.classId.toObject(),
                attending: reservation.attending
            };
        });

        res.json({ attendingClasses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

//Create 
const createRes = async (req, res) => {
    try {
        const { classId, attending } = req.body;
        const userId = req.session.currentUser;

        if (!userId) {
            console.log('User ID is not available in the session.');
            return res.status(401).json({ message: 'Not authenticated' });
        }

        await Reservation.findOneAndUpdate(
            { userId, classId },
            { attending: attending === 'true' },
            { upsert: true, new: true }
        );

        res.json({ message: 'Attendance updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

//Delete
const destroyRes = async (req, res) => {
    try {
        const { classId } = req.body;
        const userId = req.session.currentUser;

        if (!userId) {
            console.log('User ID is not available in the session.');
            return res.status(401).json({ message: 'Not authenticated' });
        }

        
        const deletionResult = await Reservation.findOneAndDelete({
            userId: userId,
            classId: classId
        });

        if (!deletionResult) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.json({ message: 'Reservation cancelled successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}




module.exports ={
    reservation,
    createRes,
    destroyRes,
}