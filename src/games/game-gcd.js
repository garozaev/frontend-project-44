import runGame from '../index.js';
import { getRandomeNumber, showFile } from '../utils.js';

const isRuleOfGame = 'Find the greatest common divisor of given numbers.';

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

const isStartNumder = 1;
const isFinishNumder = 20;
let isNumber1;
let isNumber2;

const getQuestion = () => {
  isNumber1 = getRandomeNumber(isStartNumder, isFinishNumder);
  isNumber2 = getRandomeNumber(isStartNumder, isFinishNumder);
  const isQuestion = `${isNumber1} ${isNumber2}`;
  return isQuestion;
};

const expectedAnswer = () => getGcd(isNumber1, isNumber2).toString();

const runGcd = () => showFile(runGame(isRuleOfGame, getQuestion, expectedAnswer));

export default runGcd;
export {
  isRuleOfGame, getQuestion, expectedAnswer,
};
