import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const gameQuestion = () => {
  const min = 1;
  const max = 20;
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const gameEven = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const gameСond = 'Answer "yes" if the number is even, otherwise answer "no".';
  const countMax = 3;
  let result;
  for (let i = 0; i < countMax; i += 1) {
    const gemeRound = i;
    const questRound = gameQuestion();
    const answerCheck = questRound % 2 === 0 ? 'yes' : 'no';
    result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
    if (result !== 'Correct!') {
      i = countMax;
    }
  }
  return result;
};

export default gameEven;
