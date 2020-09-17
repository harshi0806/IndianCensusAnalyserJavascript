const csvToJson = require('csvtojson');
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
    it("givenIndiaStateCensusFile_WhenWrongFilePath_ShouldReturnNotEqual", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (INDIA_STATE_CENSUS_FILE_PATH) {
            assert.notEqual(INDIA_STATE_CODE_FILE_PATH, INDIA_STATE_CENSUS_FILE_PATH);
        });
    });
    it("givenIndiaCensusData_WhenSortedOnState_ShouldReturnSortedData", function () {
        CensusAnalyser.sortOrderByState(INDIA_STATE_CENSUS_FILE_PATH, function (sortByState) {
            assert.equal(sortByState, "Andhra Pradesh");
        });
    });
    it("givenIndiaCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", function () {
        CensusAnalyser.sortByPopulationDensity(INDIA_STATE_CENSUS_FILE_PATH, function (sortByPopulation) {
            assert.equal(sortByPopulation, "Uttar Pradesh");
        });
    });
});
describe("IndiaStateCodeAnalyser", function () {
    it("Loads the number of records 37 from csv file", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CODE_FILE_PATH, function (count) {
            assert.equal(count, 37);
        });
    });
    it("givenIndiaStateCodeFile_WhenWrongFilePath_ShouldReturnNotEqual", function () {
        CensusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (INDIA_STATE_CODE_FILE_PATH) {
            assert.notEqual(INDIA_STATE_CENSUS_FILE_PATH, INDIA_STATE_CODE_FILE_PATH);
        });
    });
    it("givenIndiaStateCodeFile_WhenSortedByStateCode_ShouldReturnEqual", function () {
        CensusAnalyser.sortOrderByStateCode(INDIA_STATE_CODE_FILE_PATH, function (sortByStateCode) {
            assert.equal(sortByStateCode, "AD");
        });
    });
});
