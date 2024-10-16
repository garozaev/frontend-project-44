import runGame from '../index.js';
import {
  conversationWithUser,
  generateRandomeNumber,
  showValueInConsole,
  getAnswer,
  checkAnswer,
  getRoundAnswer,
  showQuestion,
} from '../utils.js';

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

const RuleOfGame = 'Find the greatest common divisor of given numbers.';
const userName = conversationWithUser();
showValueInConsole(RuleOfGame);

const runGcdRound = () => {
  const minNumder = 1;
  const maxhNumder = 20;
  const num1 = generateRandomeNumber(minNumder, maxhNumder);
  const num2 = generateRandomeNumber(minNumder, maxhNumder);
  const question = `${num1} ${num2}`;
  showQuestion(question);
  const PlayerAnswer = getAnswer();
  const expectedAnswer = getGcd(num1, num2).toString();
  const roundResult = checkAnswer(expectedAnswer, PlayerAnswer);
  const roundAnswer = getRoundAnswer(roundResult, userName, PlayerAnswer, expectedAnswer);
  showValueInConsole(roundAnswer);
  return roundResult;
};
const resultGame = runGame(runGcdRound);
const runGcd = () => {
  if (resultGame === true) {
    showValueInConsole(`Congratulations, ${userName}!`);
  }
};

export default runGcd;
