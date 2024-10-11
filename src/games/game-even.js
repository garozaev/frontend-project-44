import runGame from '../index.js';
import { getRandomeNumber, showFile } from '../utils.js';

const isRuleOfGame = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const isStartNumder = 1;
const isFinishNumder = 20;

const isEven = (number) => number % 2 === 0;

let number;
const getQuestion = () => {
  number = getRandomeNumber(isStartNumder, isFinishNumder);
  return number;
};

const expectedAnswer = () => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const runEven = () => showFile(runGame(isRuleOfGame, getQuestion, expectedAnswer));

export default runEven;
export {
  isRuleOfGame, getQuestion, expectedAnswer,
};
