const express = require('express')
const Rainfall = require('../models/rainfall')
const { rain } = require('../apixu')
const _ = require('lodash')

const router = express.Router()

router.get('/melbourne/:date', (req, res) => {
  const date = req.params.date

  Rainfall.find({ city: 'Melbourne', date: date })
  .then((rainfall) => {
    res.json(rainfall)
  })
  .catch((error) => {
    res.json(error.message)
  })
})

module.exports = router
