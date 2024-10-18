import readlineSync from 'readline-sync';

const generateRandomeNumber = (min, max) => {
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const conversationWithUser = () => {
  const greetUser = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const userName = greetUser;
  const hiUser = `Hello, ${userName}!`;
  console.log(hiUser);
  return userName;
};

const showValueInConsole = (file) => console.log(file);

const showQuestion = (question) => showValueInConsole(`Question: ${question}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (check, response) => check === response;

const getRoundAnswer = (answer, name, response, check) => (
  answer ? 'Correct!'
    : `'${response}' is wrong answer ;(. Correct answer was '${check}'.\nLet's try again, ${name}!`);

export {
  conversationWithUser,
  generateRandomeNumber,
  showValueInConsole,
  getAnswer,
  checkAnswer,
  getRoundAnswer,
  showQuestion,
};
