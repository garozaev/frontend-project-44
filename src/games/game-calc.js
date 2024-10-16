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

const getExpressionSing = () => {
  const firstIndex = 0;
  const secondIndex = 2;
  const index = generateRandomeNumber(firstIndex, secondIndex) - 1;
  const singsArray = ['-', '+', '*'];
  const getSing = singsArray.at(index);
  return getSing;
};

const calcXpression = (number1, sing, number2) => {
  let result;
  switch (sing) {
    case '-': result = number1 - number2;
      return result;
    case '+': result = number1 + number2;
      return result;
    case '*': result = number1 * number2;
      return result;
    default: return 'err';
  }
};

const RuleOfGame = 'What is the result of the expression?';
const userName = conversationWithUser();
showValueInConsole(RuleOfGame);

const runCalcRound = () => {
  const minNumder = 1;
  const maxhNumder = 20;
  const num1 = generateRandomeNumber(minNumder, maxhNumder);
  const num2 = generateRandomeNumber(minNumder, maxhNumder);
  const sing = getExpressionSing();
  const question = `${num1} ${sing} ${num2}`;
  showQuestion(question);
  const PlayerAnswer = getAnswer();
  const expectedAnswer = calcXpression(num1, sing, num2).toString();
  const roundResult = checkAnswer(expectedAnswer, PlayerAnswer);
  const roundAnswer = getRoundAnswer(roundResult, userName, PlayerAnswer, expectedAnswer);
  showValueInConsole(roundAnswer);
  return roundResult;
};

const resultGame = runGame(runCalcRound);
const runCalc = () => {
  if (resultGame === true) {
    showValueInConsole(`Congratulations, ${userName}!`);
  }
};

export default runCalc;
