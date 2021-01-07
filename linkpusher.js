//component will be used to select the link in in the notapad/textpad 


// const rows = [
//     ["name1", "city1", "some other info"],
//     ["name2", "city2", "more info"]
// ];

// let csvContent = "data:text/csv;charset=utf-8,";

// rows.forEach(function(rowArray) {
//     let row = rowArray.join(",");
//     csvContent += row + "\r\n";
// });

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

console.log("Simone Ram")