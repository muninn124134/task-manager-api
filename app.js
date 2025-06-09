const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const authRoutes = require('./src/routes/authRoutes.js')
const transactionRoutes = require('./src/routes/transactionRoutes.js')

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/transactions', transactionRoutes)

app.use((req, res, next) => {
    res.status(404).json({ 'message': 'Route not found'})
})

const errorHandler = require('./src/middlewares/errorHandler.js')
app.use(errorHandler)

module.exports = app
