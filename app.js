const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const transactionRoutes = require('./src/routes/transactionRoutes.js')
app.use('/api/v1/transactions', transactionRoutes)

const authRoutes = require('./src/routes/authRoutes.js')
app.use('/api/v1/auth', authRoutes)

app.use((req, res, next) => {
    res.status(404).json({ 'message': 'Route not found'})
})
module.exports = app

const errorHandler = require('./src/middlewares/errorHandler.js')
app.use(errorHandler)

