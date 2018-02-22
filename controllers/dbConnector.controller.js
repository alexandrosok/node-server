export default class DbController {

  static connection () {
    let mysql = require('mysql')
    let con = mysql.createConnection({
      host: '192.168.99.100',
      user: 'root',
      password: 'root',
      database: 'node-app'
    })

    con.connect(function (err) {
      if (err) {
        throw err
      }
      else {
        console.log('Connection with the database established')
      }
    })
  }
}