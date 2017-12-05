const axios = require('axios')

const api = axios.create({
  baseURL: 'http://api.apixu.com/v1'
})

const API_KEY = process.env.WEATHER_KEY
console.log(API_KEY)

//http://api.apixu.com/v1/history.json?key=9d6f13cafd824b5ebbc52724170412&q=melbourne&dt=2017-12-03

function rain(city, date) {
  return api.get(`/history.json?key=${API_KEY}&q=${city}&dt=${date}`)
  .then((res) => res.data)
}

module.exports = { rain }
