var Sequelize = require('sequelize');

seq = new Sequelize('seismic', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.Risks = Risks = seq.define('risks', {
  countyCode: Sequelize.STRING,
  permId: Sequelize.INTEGER,
  facilityName: Sequelize.STRING,
  buildingNo: Sequelize.INTEGER,
  buildingName: Sequelize.STRING,
  buildingStatus: Sequelize.STRING,
  spcRating: Sequelize.INTEGER,
  hazus2007: Sequelize.FLOAT,
  hazus2010: Sequelize.FLOAT,
  npcRating: Sequelize.STRING,
});
