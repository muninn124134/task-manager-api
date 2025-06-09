const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware.js')

const {
    createTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController.js')

router.use(authMiddleware)

router.post('/', createTransaction)
router.get('/', getTransactions)
router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransaction)

module.exports = router