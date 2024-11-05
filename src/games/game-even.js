import runGame from '../index.js';
import generateRandomeNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumder = 1;
const maxNumder = 20;

const isEven = (number) => number % 2 === 0;

const getAnswerIsEvenOrNo = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateRound = () => {
  const number = generateRandomeNumber(minNumder, maxNumder);
  const question = number;
  const correctAnswer = getAnswerIsEvenOrNo(number);
  return [question, correctAnswer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
