const { notFound, unauthorized } = require('./errorMessages')

function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {

    const newErrors = {}
    for (const key in err.errors) {
      newErrors[key] = err.errors[key].message
    }
    console.log(newErrors)
    return res.status(422).json(newErrors)
  }

  if (err.message === notFound) {
    console.log('entered notfound')
    return res.status(404).json({ message: 'Not Found' })
  }

  if (err.message === unauthorized) {
    console.log('entered unauthorized')
    return res.status(401).json({ message: 'bengasmells' })
  }

  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler