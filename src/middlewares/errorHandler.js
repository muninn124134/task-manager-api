const errorHandler = (err, res, req, next) => {
    console.error(err)

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500

    res.status(statusCode).json({
        message: err.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })
}

module.exports = errorHandler