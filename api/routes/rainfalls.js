const express = require('express')
const Rainfall = require('../models/rainfall')
const { rain } = require('../apixu')

const router = express.Router()

router.get('/melbourne', (req, res) => {
  //Artist.find().then((artists) => {
  //  res.json(artists)
  response = rain('Melbourne', '2017-12-03')
  console.log(response)
})

module.exports = router

