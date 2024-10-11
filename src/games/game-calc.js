import runGame from '../index.js';
import { getRandomeNumber, showFile } from '../utils.js';

const isRuleOfGame = 'What is the result of the expression?';

const getSing = () => {
  const isMinIndex = 0;
  const isMaxIndex = 2;
  const index = getRandomeNumber(isMinIndex, isMaxIndex) - 1;
  const singsAr = ['-', '+', '*'];
  const sing = singsAr.at(index);
  return sing;
};

const calcXpression = (number1, sing, number2) => {
  let x;
  switch (sing) {
    case '-': x = number1 - number2;
      return x;
    case '+': x = number1 + number2;
      return x;
    case '*': x = number1 * number2;
      return x;
    default: return 'err';
  }
};

const isStartNumder = 1;
const isFinishNumder = 20;
let isNum1;
let isNum2;
let isSing;

const getQuestion = () => {
  isNum1 = getRandomeNumber(isStartNumder, isFinishNumder);
  isNum2 = getRandomeNumber(isStartNumder, isFinishNumder);
  isSing = getSing();
  const isQuestion = `${isNum1} ${isSing} ${isNum2}`;
  return isQuestion;
};

const expectedAnswer = () => calcXpression(isNum1, isSing, isNum2).toString();

const runCalc = () => showFile(runGame(isRuleOfGame, getQuestion, expectedAnswer));

export default runCalc;
