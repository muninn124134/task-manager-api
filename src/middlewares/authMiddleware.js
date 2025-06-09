const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ message: 'Token not provided'})

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = User.findById(decoded.id).select('-password')
        if (!user) return res.status(401).json({ message: 'User not found' })

        req.user = user

        next()

    } catch (err) { next(err) }
}

module.exports = authMiddleware