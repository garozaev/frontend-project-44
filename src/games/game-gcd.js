import runGame from '../index.js';
import { generateRandomeNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 20;

const getGcd = (number1, number2) => {
  let x = number1;
  let y = number2;
  if (x > y && x % y === 0) {
    return y;
  }
  if (x < y && y % x === 0) {
    return x;
  }
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const generateRound = () => {
  const num1 = generateRandomeNumber(min, max);
  const num2 = generateRandomeNumber(min, max);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
