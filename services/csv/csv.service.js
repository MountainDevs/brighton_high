const fs = require('fs');

exports.createCSV = (data) => {
  if (fs.existsSync('./src/assets/registrants.csv')) {
    fs.unlinkSync('./src/assets/registrants.csv');
  }
    
  fs.appendFileSync('./src/assets/registrants.csv', `First Name,Last Name\n${data.registrants}`, encoding="utf8");

}