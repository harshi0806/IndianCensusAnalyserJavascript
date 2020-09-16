const csvtoJson = require('csvtojson');

function loadCsvData(path, callback) {
    let count;
    csvtoJson()
    .fromFile(path)
    .then((JSON) => {
        console.log(JSON);
        count = Object.keys(JSON).length;
        return callback(count);
    });
}
module.exports = {
    loadCsvData
};