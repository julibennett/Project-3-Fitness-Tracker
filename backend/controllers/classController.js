const {Review, Class} = require('../models/Class.js')

// Home Page
const home = async(req, res) => {
    try{
        const classes = await Class.find()
        
        if(!classes){
            res.status(404).json({message: 'Cannot find Classes!'})
        } else {
            res.status(200).json({data: classes})
        }
    } catch (err){
        console.log(err)
    }
}

// Class Show Page
const show = async(req, res) => {
    try{
        const index = req.params.id
        const foundClass = await Class.findById(index)
        console.log(foundClass)

        if(!foundClass) {
            res.status(404).json({message: 'Cannot find this class!'})
        } else {
            res.status(200).json({data: foundClass})
        }
        
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    home,
    show,
}