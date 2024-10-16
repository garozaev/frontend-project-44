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

const isPrime = (number) => {
  let result;
  if (number <= 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
    result = true;
  }
  return result;
};

const getAnswerPrimeOrNo = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const RuleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const userName = conversationWithUser();
showValueInConsole(RuleOfGame);

const runPrimeRound = () => {
  const minNumder = 1;
  const maxNumder = 20;
  const number = generateRandomeNumber(minNumder, maxNumder);
  const question = number;
  showQuestion(question);
  const PlayerAnswer = getAnswer();
  const expectedAnswer = getAnswerPrimeOrNo(number);
  const roundResult = checkAnswer(expectedAnswer, PlayerAnswer);
  const roundAnswer = getRoundAnswer(roundResult, userName, PlayerAnswer, expectedAnswer);
  showValueInConsole(roundAnswer);
  return roundResult;
};

const resultGame = runGame(runPrimeRound);
const runPrime = () => {
  if (resultGame === true) {
    showValueInConsole(`Congratulations, ${userName}!`);
  }
};

export default runPrime;
