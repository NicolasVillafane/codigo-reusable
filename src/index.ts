import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let teamWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'River Plate' && match[5] === MatchResult.HomeWin) {
    teamWins++;
  } else if (match[2] === 'River Plate' && match[5] === MatchResult.AwayWin) {
    teamWins++;
  }
}

console.log(`River won ${teamWins} games`);
