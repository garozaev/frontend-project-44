import runGame from '../index.js';
import generateRandomeNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumder = 1;
const maxNumder = 20;

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
  const num1 = generateRandomeNumber(minNumder, maxNumder);
  const num2 = generateRandomeNumber(minNumder, maxNumder);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
