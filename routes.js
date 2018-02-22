import DbConnector from './controllers/dbConnector.controller'

module.exports = function (app) {

  app.get('/', function (req, res, next) {
  })

  app.get('/listUsers', function (req, res) {
    DbConnector.connection()
    //res.send('hello world')
  })

  app.post('/addUser', function (req, res) {
    res.send('POST request to the homepage')
  })

}
