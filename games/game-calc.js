import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomeNumber = () => {
  const min = 1;
  const max = 20;
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const getSing = () => {
  const max = 3;
  const index = Math.floor(Math.random() * max);
  const singsAr = ['-', '+', '*'];
  const sing = singsAr.at(index);
  return sing;
};

const calc = (number1, sing, number2) => {
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

const gameCalc = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const gameСond = 'What is the result of the expression?';
  const countMax = 3;
  let result;
  for (let i = 0; i < countMax; i += 1) {
    const gemeRound = i;
    const num1 = randomeNumber();
    const num2 = randomeNumber();
    const operation = getSing();
    const questRound = `${num1} ${operation} ${num2}`;
    const answerCheck = (calc(num1, operation, num2)).toString();
    result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
    if (result !== 'Correct!') {
      i = countMax;
    }
  }
  return result;
};

export default gameCalc;
