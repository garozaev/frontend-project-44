import runGame from '../index.js';
import {
  conversationWithUser,
  generateRandomeNumber,
  showValueInConsole,
  getAnswer,
  checkAnswer,
  getRoundAnswer,
} from '../utils.js';

const getProgressionRow = (difference) => {
  const minNumberForStart = 0;
  const maxNumberForStart = 100;
  const rowLength = 10;
  const minHideIndex = 0;
  const maxHideIndex = rowLength - 1;
  const numberStart = generateRandomeNumber(minNumberForStart, maxNumberForStart);
  const indexGetlost = generateRandomeNumber(minHideIndex, maxHideIndex) - 1;
  let number = numberStart;
  let getlostNumber;
  const numbers = [];
  const result = [];
  for (let i = 0; i < rowLength; i += 1) {
    if (i === indexGetlost) {
      getlostNumber = number + difference;
      number = '..';
      numbers.push(number);
      number = getlostNumber;
    } else {
      number += difference;
      numbers.push(number);
    }
  }
  result.push(numbers);
  result.push(getlostNumber);
  return result;
};

const RuleOfGame = 'What number is missing in the progression?';
const userName = conversationWithUser();
showValueInConsole(RuleOfGame);

const runProgressionRound = () => {
  const startNumderForStep = 1;
  const endNumderForStep = 3;
  const progressionStep = generateRandomeNumber(startNumderForStep, endNumderForStep);
  const progression = getProgressionRow(progressionStep);
  const question = progression[0].join(' ');
  showValueInConsole(question);
  const PlayerAnswer = getAnswer();
  const expectedAnswer = progression[1].toString();
  const roundResult = checkAnswer(expectedAnswer, PlayerAnswer);
  const roundAnswer = getRoundAnswer(roundResult, userName, PlayerAnswer, expectedAnswer);
  showValueInConsole(roundAnswer);
  return roundResult;
};

const resultGame = runGame(runProgressionRound);
const runProgression = () => {
  if (resultGame === true) {
    showValueInConsole(`Congratulations, ${userName}!`);
  }
};

export default runProgression;
