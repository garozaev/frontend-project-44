import runGame from '../index.js';
import generateRandomeNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumder = 1;
const maxNumder = 20;

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

const getAnswerPrimeOrNo = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const generateRound = () => {
  const number = generateRandomeNumber(minNumder, maxNumder);
  const question = number;
  const correctAnswer = getAnswerPrimeOrNo(number);
  return [question, correctAnswer];
};

const runPrime = () => runGame(description, generateRound);

export default runPrime;
