const assert = require("chai").assert;
const censusAnalyser = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE_PATH = "./resources/IndiaStateCensusData.csv";

describe("IndiaStateCensusAnalyser", function () {
    it("Loads the number of records 29 from csv file", function () {
        censusAnalyser.loadCsvData(INDIA_STATE_CENSUS_FILE_PATH, function (count) {
            assert.equal(count, 29);
        });
    });
});
