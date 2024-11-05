import runGame from '../index.js';
import generateRandomeNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const minNumberForStart = 0;
const maxNumberForStart = 100;
const rowLength = 10;
const minHideIndex = 0;
const maxHideIndex = rowLength - 1;
const minNumderForStep = 1;
const maxNumderForStep = 10;

const getProgressionRow = (difference) => {
  const firstNumberInProgression = generateRandomeNumber(minNumberForStart, maxNumberForStart);
  const hideIndex = generateRandomeNumber(minHideIndex, maxHideIndex);
  let number = firstNumberInProgression;
  let hideNumber;
  const numbers = [];
  const result = [];
  for (let i = 0; i < rowLength; i += 1) {
    if (i === hideIndex) {
      hideNumber = number + difference;
      number = '..';
      numbers.push(number);
      number = hideNumber;
    } else {
      number += difference;
      numbers.push(number);
    }
  }
  result.push(numbers);
  result.push(hideNumber);
  return result;
};

const generateRound = () => {
  const progressionStep = generateRandomeNumber(minNumderForStep, maxNumderForStep);
  const progression = getProgressionRow(progressionStep);
  const question = progression[0].join(' ');
  const correctAnswer = progression[1].toString();
  return [question, correctAnswer];
};

const runProgression = () => runGame(description, generateRound);

export default runProgression;
