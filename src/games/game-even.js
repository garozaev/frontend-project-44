import runGame from '../index.js';
import {
  conversationWithUser,
  generateRandomeNumber,
  showValueInConsole,
  getAnswer,
  checkAnswer,
  getRoundAnswer,
} from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getAnswerIsEvenOrNo = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const RuleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const userName = conversationWithUser();
showValueInConsole(RuleOfGame);

const runEvenRound = () => {
  const minNumder = 1;
  const maxNumder = 20;
  const number = generateRandomeNumber(minNumder, maxNumder);
  const question = number;
  showValueInConsole(question);
  const PlayerAnswer = getAnswer();
  const expectedAnswer = getAnswerIsEvenOrNo(number);
  const roundResult = checkAnswer(expectedAnswer, PlayerAnswer);
  const roundAnswer = getRoundAnswer(roundResult, userName, PlayerAnswer, expectedAnswer);
  showValueInConsole(roundAnswer);
  return roundResult;
};

const resultGame = runGame(runEvenRound);
const runEven = () => {
  if (resultGame === true) {
    showValueInConsole(`Congratulations, ${userName}!`);
  }
};

export default runEven;
