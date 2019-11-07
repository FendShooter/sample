const express = require('express');
const db = require('./db');
const router = require('../routes/api/members');
const app = express();

app.use('/api/members', require('../routes/api/members'));

app.get('/', (req, res) => {
  res.send(`Home page`);
})
app.get('/users', (req, res) => {
  const sql = "select * from  employees"
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const sql = "select * from  employees where id = ?"
  db.query(sql,[userId] ,(err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{ console.log('Sever running...');
})
