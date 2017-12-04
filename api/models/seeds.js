require('dotenv').config()
const { rain } = require('../apixu')
const mongoose = require('./init')
const Rainfall = require('./rainfall')

const city = 'Melbourne'
const date = '2017-12-03'
rain(city, date)
.then((result) => {
  console.log('result:', result.totalprecip_mm)
//  Rainfall.create([
//    { date: date },
//    { city: city },
//    { quantity: result.totalprecip_mm },
//  ])
//  .then((rainfall) => {               // when this has completed this will be called
//    console.log('Created artist', rainfall)
//  })

})


