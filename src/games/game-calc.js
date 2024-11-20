import runGame from '../index.js';
import { generateRandomeNumber, getRandomeIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const sings = ['-', '+', '*'];
const min = 1;
const max = 20;

const calcExpression = (number1, sing, number2) => {
  switch (sing) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`Unknow values state: '${number1}' or '${sing}' or '${number2}'!`);
  }
};

const generateRound = () => {
  const num1 = generateRandomeNumber(min, max);
  const num2 = generateRandomeNumber(min, max);
  const randomeIndex = getRandomeIndex(sings);
  const sing = sings[randomeIndex];
  const question = `${num1} ${sing} ${num2}`;
  const correctAnswer = String(calcExpression(num1, sing, num2));
  return [question, correctAnswer];
};

const runCalc = () => runGame(description, generateRound);

export default runCalc;
