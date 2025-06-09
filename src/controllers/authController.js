const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d', })
}

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const userExist = await User.findOne({ email })
        
        if (userExist) return res.status(400).json({ 'message': 'Email alredy exist'})
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        const token = generateToken(user.id)

        res.status(201).json({ 'token': token })
    
    } catch (err) {next(err)}


}