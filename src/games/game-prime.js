import runGame from '../index.js';
import { getRandomeNumber, showFile } from '../utils.js';

const isRuleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result;
  if (number <= 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
    result = true;
  }
  return result;
};

const isStartNumder = 1;
const isFinishNumder = 20;
let isNamber;
const getQuestion = () => {
  isNamber = getRandomeNumber(isStartNumder, isFinishNumder);
  return isNamber;
};
const expectedAnswer = () => {
  const result = isPrime(isNamber) ? 'yes' : 'no';
  return result;
};

const runPrime = () => showFile(runGame(isRuleOfGame, getQuestion, expectedAnswer));

export default runPrime;
export {
  isRuleOfGame, getQuestion, expectedAnswer,
};
