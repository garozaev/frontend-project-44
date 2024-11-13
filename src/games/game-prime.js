import runGame from '../index.js';
import { generateRandomeNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 20;

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

const generateRound = () => {
  const number = generateRandomeNumber(min, max);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => runGame(description, generateRound);

export default runPrime;
