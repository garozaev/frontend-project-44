import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomNumber = () => {
  const min = 1;
  const max = 10;
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const progressionRow = (difference) => {
  const rowLength = 10;
  const numberStart = Math.floor(Math.random() * 100);
  const indexGetlost = Math.floor(Math.random() * (rowLength));
  let number = numberStart;
  let getlostNumber;
  const Numbers = [];
  const result = [];
  for (let i = 0; i < rowLength; i += 1) {
    if (i === indexGetlost) {
      getlostNumber = number + difference;
      number = '..';
      Numbers.push(number);
      number = getlostNumber;
    } else {
      number += difference;
      Numbers.push(number);
    }
  }
  result.push(Numbers);
  result.push(getlostNumber);
  return result;
};

const gameProgression = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const gameСond = 'What number is missing in the progression?';
  const countMax = 3;
  let result;
  for (let i = 0; i < countMax; i += 1) {
    const gemeRound = i;
    const step = randomNumber();
    const roundNambers = progressionRow(step);
    const roundGetlostNumber = roundNambers[0].join(' ');
    const questRound = `${roundGetlostNumber}`;
    const answerCheck = roundNambers[1].toString();
    result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
    if (result !== 'Correct!') {
      i = countMax;
    }
  }
  return result;
};

export default gameProgression;
