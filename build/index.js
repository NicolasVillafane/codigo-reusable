"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var teamWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'River Plate' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        teamWins++;
    }
    else if (match[2] === 'River Plate' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        teamWins++;
    }
}
console.log("River won " + teamWins + " games");
