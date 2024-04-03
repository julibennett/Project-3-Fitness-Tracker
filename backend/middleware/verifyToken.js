const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env

const createToken = (user) => {
    try {
        const token = jwt.sign({id: user._id, email: user.email, username: user.username}, JWT_SECRET, {expiresIn: "2h"})
        // payload, protected key, when the token expires 
        return token
    }catch(err){
        console.log(err)
    }
}

const verifyToken = (req, res, next) => {
    try{
        const bearerHeader = req.headers['authorization']
        // console.log(bearerHeader, " <-- this is bearerheader")
        if (!bearerHeader){
            // no token provided in the header!
            return res.status(403).json({error: "You don't have permission to access this resource"})
        }
        
        const decoded = jwt.verify(bearerHeader, JWT_SECRET)
        // console.log(decoded, " <-- DECODED TOKEN")
        // couldn't verify the token!
        if(!decoded){
            return res.status(400)
        }
        // console.log(decoded, "<-- this is our user")
        // token is verified, move on to the next() thing in the route (the controller)
        next()
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Internal server error"})
    }
}

module.exports = {
    createToken, 
    verifyToken
}
