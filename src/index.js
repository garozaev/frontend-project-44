import {
  converWithUser, showFile, getFile, checkAnswer,
} from './utils.js';

const runGame = (rule, question, expected) => {
  const isUserName = converWithUser();
  showFile(rule);
  const isMaxRound = 3;
  let result;
  for (let i = 0; i < isMaxRound; i += 1) {
    if (i < isMaxRound - 1) {
      const isQuestionRound = question();
      const expectedRound = expected();
      showFile(isQuestionRound);
      const isPlayerAnswer = getFile();
      result = checkAnswer(expectedRound, isPlayerAnswer, isUserName);
      if (result === 'Correct!') {
        showFile(result);
      }
      if (result !== 'Correct!') {
        i = isMaxRound;
        return result;
      }
    } else {
      const isQuestionRound = question();
      const expectedRound = expected();
      showFile(isQuestionRound);
      const isPlayerAnswer = getFile();
      result = checkAnswer(expectedRound, isPlayerAnswer, isUserName);
      if (result === 'Correct!') {
        showFile(result);
      }
      if (result !== 'Correct!') {
        i = isMaxRound;
        return result;
      }
    }
  }
  result = `Congratulations, ${isUserName}!`;
  return result;
};

export default runGame;
