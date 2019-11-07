const express = require('express');
const router = express.Router();
const members = require('../../src/officer');
// all members

router.get('/', (req, res) => { res.json(members) })

router.get('/:id', (req,res) => {
  
  res.send(members.filter(member => member.id === parseInt(req.param.id)))
})

module.exports = router;