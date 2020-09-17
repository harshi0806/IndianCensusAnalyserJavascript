const csvToJson = require('csvtojson');
const assert = require("chai").assert;
const censusAnalyser = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE_PATH = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE_PATH = "./resources/IndiaStateCode.csv";
const US_CENSUS_FILE_PATH = "./resources/USCensusData.csv";

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
        CensusAnalyser.sortOrderByState(INDIA_STATE_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "Andhra Pradesh");
        });
    });
    it("givenIndiaCensusData_WhenSortedOnPopulation_ShouldReturnSortedData", function () {
        CensusAnalyser.sortByPopulation(INDIA_STATE_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "Uttar Pradesh");
        });
    });
    it("givenIndiaCensusData_WhenSortedOnPopulationDensity_ShouldReturnSortedData", function () {
        CensusAnalyser.sortByPopulationDensity(INDIA_STATE_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "Bihar");
        });
    });
    it("givenIndiaCensusData_WhenSortedOnArea_ShouldReturnSortedData", function () {
        CensusAnalyser.sortByArea(INDIA_STATE_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "Rajasthan");
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
        CensusAnalyser.sortOrderByStateCode(INDIA_STATE_CODE_FILE_PATH, function (data) {
            assert.equal(data, "AD");
        });
    });
});
describe("USCensusAnalyser", function () {
    it("Loads the number of records 51 from csv file", function () {
        CensusAnalyser.loadCsvData(US_CENSUS_FILE_PATH, function (count) {
            assert.equal(count, 51);
        });
    });
    it("givenUSCensusData_WhenSortedOnPopulation_ShouldReturnEqual", function () {
        CensusAnalyser.sortByPopulation(US_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "California");
        });
    });
    it("givenUSCensusData_WhenSortedOnPopulationDensity_ShouldReturnEqual", function () {
        CensusAnalyser.sortByPopulationDensity(US_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "District of Columbia");
        });
    });
    it("givenUSCensusData_WhenSortedOnArea_ShouldReturnEqual", function () {
        CensusAnalyser.sortByArea(US_CENSUS_FILE_PATH, function (data) {
            assert.equal(data, "Alaska");
        });
    });
});
