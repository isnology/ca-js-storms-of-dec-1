const Rainfall = require('../models/rainfall')

Rainfall.deleteMany()
.then(() => {
  console.log('Deleted day records')
  process.exit()
})