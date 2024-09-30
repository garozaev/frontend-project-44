import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomeNumber = () => {
  const min = 1;
  const max = 20;
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const checkIsPrime = (num) => {
  let result;
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
    result = true;
  }
  return result;
};

const gamePrime = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const gameCond = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const countMax = 3;
  let result;
  for (let i = 0; i < countMax; i += 1) {
    const gameRound = i;
    const roundNum = randomeNumber();
    const questionRound = roundNum;
    const answerCheck = checkIsPrime(roundNum) === true ? 'yes' : 'no';
    result = gameEngine(userName, gameCond, gameRound, questionRound, answerCheck, countMax);
    if (result !== 'Correct!') {
      i = countMax;
      return result;
    }
  }
  return result;
};

export default gamePrime;
