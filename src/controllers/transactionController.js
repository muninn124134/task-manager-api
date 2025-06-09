const Transaction = require('../models/Transaction.js')

exports.createTransaction = async (req, res, next) => {
    try {

        const transaction = await Transaction.create({
            ...req.body,
            user: req.user.id
        })

        return res.status(201).json(transaction)

    } catch (err) { next(err) }
}

exports.getTransactions = async (req, res, next) => {
    try {

        const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 })
        return res.status(200).json(transactions)

    } catch (err) { next(err) }
}

exports.updateTransaction = async (req, res, next) => {
    try {

        const transaction = await Transaction.findOneAndUpdate({
            _id: req.params.id,
            user: req.user.id,
        },
        req.body,
        {
            new: true
        })

        if (!transaction) return res.status(401).json({ message: 'Transaction not found' })

        return res.status(200).json(transaction)

    } catch (err) { next(err) }
}

exports.deleteTransaction = async (req, res, next) => {
    try {

        const deleted = await Transaction.findOneAndDelete({
            _id: req.params.id,
            user: req.body.id,
        })

        if (!deleted) return res.status(400).json({ message: 'Transaction not found' })

        return res.status(200).json({ message: 'Transaction deleted' })
    } catch (err) { next(err) }
}