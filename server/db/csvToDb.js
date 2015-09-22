var csv = require('csv');
var fs = require('fs');
var db = require('./db.js');

// keys: column of csv/ vals: name of database field
var csvSqlMapping = {
  0: 'countyCode',
  1: 'permId',
  2: 'facilityName',
  3: 'buildingNo',
  4: 'buildingName',
  5: 'buildingStatus',
  6: 'spcRating',
  7: 'hazus2007',
  8: 'hazus2010',
  9: 'npcRating'
};


fs.readFile('./seismic-truncated.csv', function(err, result) {
  if (err) console.log("error reading file: ", err);
  csv.parse(result, function(err, output) {
    if (err) console.log("error parsing csv: ", err);
    console.log(output);

    // put output in the db
    // output should be an array of arrays
    //start at row 1 to skip headings
    for (var row = 1; row < output.length; row++) {
      // we're leaving the last two columns out of the db
      var dbRow = {};
      for (var cell = 0; cell < 10; cell++) {
        dbRow[csvSqlMapping[cell]] = output[row][cell] || null;
      }
      db.Risks.create(dbRow);
    }
  });
});
