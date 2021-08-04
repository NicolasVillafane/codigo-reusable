import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
const reader = new MatchReader('football.csv');
reader.read();

let teamWins = 0;

for (let match of reader.data) {
  if (match[1] === 'River Plate' && match[5] === MatchResult.HomeWin) {
    teamWins++;
  } else if (match[2] === 'River Plate' && match[5] === MatchResult.AwayWin) {
    teamWins++;
  }
}

console.log(`River won ${teamWins} games`);
