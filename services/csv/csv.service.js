const fs = require('fs');

exports.createCSV = (data) => {
  if (fs.existsSync('./public/assets/everything.csv')) {
    fs.unlinkSync('./public/assets/everything.csv');
  }
  
  fs.appendFileSync('./public/assets/everything.csv', `First Name,Last Name\n${data.registrants}`, encoding="utf8");

}