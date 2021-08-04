"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var teamWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'River Plate' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        teamWins++;
    }
    else if (match[2] === 'River Plate' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        teamWins++;
    }
}
console.log("River won " + teamWins + " games");
