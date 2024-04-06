const bcrypt = require("bcrypt")
const User = require("../models/User")
const {createToken} = require("../middleware/verifyToken")

const signup = async (req, res) => {
    try{
        const {email, username, password} = req.body

        // prep our query for execution
        const query = User.find({})
        // query.or([{key: value}, {key: value}]) <-- checks for data at [0] OR [1], in this case
        query.or([{username: username},{email:email}])
        // run the query! 
        const foundUser = await query.exec()

        if(foundUser.length !== 0){
            return res.status(400).json({message: "Username or Email already taken."})
        } 
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        req.body.password = hash
        const createdUser = await User.create(req.body)
        await createdUser.save()

        return res.status(201).json({message: "User successfully registered", userId: createdUser.id})

    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Internal server error", message: err.message})
    }
}

const login = async (req, res) => {
    try{
        const {username, password, email} = req.body
        // prep our query for execution
        const query = User.find({})
        // query.and([{key: value}, {key: value}]) <-- checks for data at [0] OR [1], in this case
        // this behavior REQUIRES our user to give us their username, email, AND password in order to login
        // change this query depending on your preferred login credentials for your user
        query.and([{username: username},{email:email}])
        // run the query! returns an array, empty or not
        const foundUser = await query.exec()
        
        if(foundUser.length === 0){
            return res.status(400).json({error: "Invalid login credentials"})
        }

        const verifyPassword = await bcrypt.compare(password, foundUser[0].password)
        // password doesnt match!
        if (!verifyPassword) {
            return res.status(400).json({error: "Invalid login credentials"})
        }

        const token = createToken(foundUser[0])
        // console.log(foundUser[0]._id)
        // sending the id up to the frontend will make it easier to use it in API calls! The same goes for any user info you may need.
        return res.status(200).json({token, id: foundUser[0]._id})

    }catch(err){
        console.log(err)
        return res.status(500).json({message: "Internal server error", error: err.message})
    }
}

const getUser = async (req, res) => {
    try{
        const id = req.params.id
        const query = User.findById(id)
        // another Query() operation! So cool!
        query.select('-password')
        const foundUser = await query.exec()
        // console.log(foundUser)
        if(!foundUser){
            return res.status(400).json({error: "User not found"})
        }
        return res.status(200).json({message: "Successfully found user", data: foundUser})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Internal server error"})
    }
}


module.exports = {
    getUser,
    signup,
    login
}

