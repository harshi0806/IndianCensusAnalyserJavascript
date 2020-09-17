const csvtoJson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');

class CensusAnalyser {
    loadCsvData(path, callback) {
        let count = 0;
        fs.createReadStream(path)
        .pipe(csv())
        .on(("data"), (row) => {
            count += 1;
        })
        .on("end", () => {
            console.log("Number of records: "+ count);
            return callback(count);
        }); 
    }

    sortOrderByState(path, callback) {
        csvtoJson()
        .fromFile(path)
        .then((stateData) => {
            let sortByState = stateData.sort((a , b) => a.State - b.State)
            console.log("Sort by State Data: "+ sortByState);
            return callback(sortByState);
        });
    }
}

module.exports = CensusAnalyser;