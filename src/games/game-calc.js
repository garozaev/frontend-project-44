import runGame from '../index.js';
import generateRandomeNumber from '../utils.js';

const description = 'What is the result of the expression?';
const singsArray = ['-', '+', '*'];
const firstIndex = 0;
const secondIndex = 2;
const minNumder = 1;
const maxhNumder = 20;

const getExpressionSing = () => {
  const index = generateRandomeNumber(firstIndex, secondIndex) - 1;
  const getSing = singsArray.at(index);
  return getSing;
};

const calcXpression = (number1, sing, number2) => {
  let result;
  switch (sing) {
    case '-': result = number1 - number2;
      return result;
    case '+': result = number1 + number2;
      return result;
    case '*': result = number1 * number2;
      return result;
    default: return 'err';
  }
};

const generateRound = () => {
  const num1 = generateRandomeNumber(minNumder, maxhNumder);
  const num2 = generateRandomeNumber(minNumder, maxhNumder);
  const sing = getExpressionSing();
  const question = `${num1} ${sing} ${num2}`;
  const correctAnswer = calcXpression(num1, sing, num2).toString();
  return [question, correctAnswer];
};

const runCalc = () => runGame(description, generateRound);

export default runCalc;
