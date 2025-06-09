const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware.js')

const {
    createTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController.js')

router.use(authMiddleware)

router.post('/', createTransaction)
router.get('/', getTransaction)
router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransaction)
