const mongoose = require('./init')

// define our model
const Rainfall = mongoose.model('Rainfall', {
  date: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0.0
  }
})

module.exports = Rainfall