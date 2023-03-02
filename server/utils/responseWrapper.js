const success = (statusCode , result) => {
    return {
        stauts: 'ok',
        statusCode,
        result
    }
}
const error = (statusCode , message) => {
    return {
        stauts: 'error',
        statusCode,
        message
    }
}

module.exports = {
    success,
    error
}