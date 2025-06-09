const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware.js')

router.get('/me', authMiddleware, (req, res) => {
    return res.status(200).json({ user: req.user })
})

module.exports = router