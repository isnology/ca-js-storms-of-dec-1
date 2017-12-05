const mongoose = require('./init')

// define our model
const Rainfall = mongoose.model('Rainfall', {
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  city: { type: String, required: true },
  quantity: { type: Number, default: 0.0 }
})

module.exports = Rainfall