var router = require('express').Router();
var path = require('path');

var db = require('./db/db.js');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/buildingnames', function(req, res) {
  db.Risks.findAll()
    .then(function(hospitals) {
      res.status(200);
      res.send(hospitals);
    })
    .catch(function(err) {
      res.sendStatus(500);
      console.log("error getting from db: ", err);
    });
});


module.exports = router;
