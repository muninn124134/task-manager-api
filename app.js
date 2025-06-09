const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const authRoutes = require('./src/routes/authRoutes.js')
app.use('/api/v1/auth', authRoutes)

app.use((req, res, next) => {
    res.status(404).json({ 'message': 'Route not found'})
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.statusCode || 500).json( {
        'error' : err.message || 'Internal error'
    })
})
