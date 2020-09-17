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
            return callback(sortByState);
        });
    }

    sortOrderByStateCode(path, callback) {
        csvToJson()
        .fromFile(path)
        .then((stateData) => {
        let sortByStateCode = stateData.sort((a, b) => a.StateCode - b.StateCode)
        return callback(sortByStateCode);
        }); 
    }
}

module.exports = CensusAnalyser;