const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: '1234',
  database: 'store'
});

db.connect((err) => {
  if (err) throw err;
  console.log('db connected...');
  
})

module.exports = db;