const assert = require("chai").assert;
const censusAnalyser = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE_PATH = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE_PATH = "./resources/IndiaStateCode.csv";

var CensusAnalyser = new censusAnalyser();
describe("IndiaStateCensusAnalyser", function () {
    it("Loads the number of records 29 from csv file", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (count) {
            assert.equal(count, 29);
        });
    });
    it("Given wrong INDIA_STATE_CENSUS_FILE_PATH", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (count) {
            assert.notEqual(count, 30);
        });
    });
});
describe("IndiaStateCodeAnalyser", function () {
    it("Loads the number of records 37 from csv file", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CODE_FILE_PATH, function (count) {
            assert.equal(count, 37);
        });
    });
    it("Given wrong INDIA_STATE_CODE_FILE_PATH", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (count) {
            assert.notEqual(count, 30);
        });
    });
});
