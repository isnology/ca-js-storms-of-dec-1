const Path = require('path')
const dotEnvPath = Path.resolve('./.env')
const _ = require('lodash')

require('dotenv').config({path: dotEnvPath})

const { rain } = require('../apixu')
const Rainfall = require('./rainfall')
const mongoose = require('mongoose')

function loadDB(city, date) {
  rain(city, date)
  .then((result) => {
    const attributes = {
      year: result.forecast.forecastday[0].date.substring(0, 4),
      month: result.forecast.forecastday[0].date.substring(5, 7),
      day: result.forecast.forecastday[0].date.substring(8, 10),
      city: result.location.name,
      quantity: result.forecast.forecastday[0].day.totalprecip_mm
    }
    return Rainfall.create(attributes)
  })
  .then((rainfall) => {               // when this has completed this will be called
    console.log('Created rainfall record: ', rainfall)
  })
  .catch(err => {
    console.log(err)
    console.log(err.message)
  })
}

const date = '2017-11-';

_.range(7, 31).forEach(day => {
  const fullDate = date + day.toString()
  loadDB('Melbourne', fullDate)
  loadDB('Wellington', fullDate)
  loadDB('Sydney', fullDate)
});


// mongoose.connection.close();
