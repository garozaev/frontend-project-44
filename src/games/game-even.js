import runGame from '../index.js';
import { generateRandomeNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 20;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomeNumber(min, max);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
