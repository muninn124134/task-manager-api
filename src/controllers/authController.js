const User = require('../models/User.js')
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

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ message: 'Email and password are required'})

        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ message: 'Invalid credentials'})

        const correctPassword = await bcrypt.compare(password, user.password)
        if (!correctPassword) return res.status(401).json({ message: 'Invalid credentials'})

        const token = generateToken(user._id)

        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                balance: user.balance,
            }
        })
    } catch (err) { next(err) }

}

exports.getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password') // ignora o campo password
        if (!user) return res.status(404).json({ message: 'User not found' })

        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            balance: user.balance,
        })

    } catch (err) { next(err) }
}