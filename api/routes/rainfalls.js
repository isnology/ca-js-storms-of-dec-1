const express = require('express')
const Rainfall = require('../models/rainfall')
const { rain } = require('../apixu')
const _ = require('lodash')
const moment = require('moment')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/rainfall/:city/:year/:month/:day', (req, res) => {
  const urlCity = req.params.city
  const year = req.params.year
  const month = _.padStart(req.params.month, 2, '0')
  const day = _.padStart(req.params.day, 2, '0')

  let city = _.upperFirst(_.toLower(urlCity))

  //Rainfall.findById("5a26214686094d5f20681672")
  Rainfall.find({ year: year, month: month, day: day, city: city })
  .then((rainfall) => {
    if (rainfall[0]) {
      res.json(rainfall[0])
    }
    else {
      res.status(404).json({ error: `Rainfall of ${city} with date: '${date}' not found` })
    }
  })
  .catch((error) => {
    res.status(400).json({ error: error.message })
  })
})

router.get('/rainfall/:city/:year/:month', (req, res) => {
  const urlCity = req.params.city
  const year = req.params.year
  const month = _.padStart(req.params.month, 2, '0')
  const day = _.padStart(req.params.day, 2, '0')

  let city = _.upperFirst(_.toLower(urlCity))

  //Rainfall.findById("5a26214686094d5f20681672")
  Rainfall.find({ year: year, month: month, city: city })
  .then((rainfall) => {
    if (rainfall[0]) {
      res.json(rainfall)
    }
    else {
      res.status(404).json({ error: `Rainfall of ${city} with date: '${date}' not found` })
    }
  })
  .catch((error) => {
    res.status(400).json({ error: error.message })
  })
})

module.exports = router
