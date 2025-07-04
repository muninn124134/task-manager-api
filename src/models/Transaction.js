const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    type: {
        type: String,
        enum: ['expense', 'income'],
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    }
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction