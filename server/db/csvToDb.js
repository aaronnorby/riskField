var csv = require('csv-parse');
var fs = require('fs');
var db = require('./db.js');

fs.readFile('./seismic-truncated.csv', function(err, result) {
  if (err) console.log("error reading file: ", err);
  csv(result, function(err, output) {
    if (err) console.log("error parsing csv: ", err);
    // put output in the db
  });
});
