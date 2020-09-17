/*************************************************************
 *
 * Execution       : default node cmd> node CensusAnalyser.js
 * Purpose         : Analayze India & US Census Data
 *
 * @description    : Analayze India & US Census Data from csvfile,
 *                   check number of records in csvFiles 
 *                   and sort data by state, population,
 *                   population density, totalArea, etc. 
 *                   to compute new data as per sort accordingly.
 *
 * @file           : CensusAnalyser.js
 * @overview       : Analayze India & US Census Data
 * @module         : Node.js, npm and local packages 
 * @version        : 1.0
 * @since          : 18/09/2020
 *
 * **********************************************************/

const csvtoJson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');

class CensusAnalyser {
    csvToJsonConversion(path, callback) {
        var promise = new Promise(function(resolve, reject) {
            csvtoJson()
            .fromFile(path)
            resolve("Converted successfully");
            reject("Conversion rejected");
        });
        promise.
        then(function () {
            return callback(data);
        }).
        catch(function () {
            console.log("Error encountered");
        });
    }

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
        this.csvToJsonConversion(path, function (data) {
        data.sort((a, b) => a.StateCode - b.StateCode)
        return callback(data);
        }); 
    }

    sortByPopulation(path, callback) {
        this.csvToJsonConversion(path, function (data) {
        data.sort((a, b) => a.Population - b.Population);
        return callback(data);    
        });
    }

    sortByPopulationDensity(path, callback) {
        this.csvToJsonConversion(path, function (data) {
        data.sort((a, b) => a.DensityPerSqKm  - b.DensityPerSqKm );
        return callback(data);    
        });
    }

    sortByArea(path, callback) {
        this.csvToJsonConversion(path, function (data) {
        data.sort((a, b) => a.AreaInSqKm   - b.AreaInSqKm );
        return callback(data);    
        });
    }
}

module.exports = CensusAnalyser;