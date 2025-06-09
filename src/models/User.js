const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = Schema.ObjectId

const UserSchema = new Schema({
    name: { 
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    balance: {
        type: Number,
        default: 0,
    },

    userId: objectId
}, { timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User