// our dependencies
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('content-type', 'application/json; charset=utf-8')
  next()
})

require('./routes')(app)

app.listen(3000, function () {
  console.log('Woo Listening on port 3000')
})

