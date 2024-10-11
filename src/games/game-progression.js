import runGame from '../index.js';
import { getRandomeNumber, showFile } from '../utils.js';

const isRuleOfGame = 'What number is missing in the progression?';
const isMinNumberForStart = 0;
const isMaxNumberForStart = 100;

const getProgressionRow = (difference) => {
  const rowLength = 10;
  const minGetLostIndex = 0;
  const maxGetLostIndex = rowLength - 1;
  const numberStart = getRandomeNumber(isMinNumberForStart, isMaxNumberForStart);
  const indexGetlost = getRandomeNumber(minGetLostIndex, maxGetLostIndex) - 1;
  let number = numberStart;
  let getlostNumber;
  const Numbers = [];
  const result = [];
  for (let i = 0; i < rowLength; i += 1) {
    if (i === indexGetlost) {
      getlostNumber = number + difference;
      number = '..';
      Numbers.push(number);
      number = getlostNumber;
    } else {
      number += difference;
      Numbers.push(number);
    }
  }
  result.push(Numbers);
  result.push(getlostNumber);
  return result;
};

const isStartNumderForStep = 1;
const isFinishNumderForStep = 10;
let answer;

const getQuestionAndAnswer = () => {
  const isProgressionStep = getRandomeNumber(isStartNumderForStep, isFinishNumderForStep);
  const progression = getProgressionRow(isProgressionStep);
  const question = progression[0].join(' ');
  answer = progression[1].toString();
  return question;
};

const expectedAnswer = () => answer;

const runProgression = () => showFile(runGame(isRuleOfGame, getQuestionAndAnswer, expectedAnswer));

export default runProgression;
