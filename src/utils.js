import readlineSync from 'readline-sync';

const getRandomeNumber = (min, max) => {
  const random = Math.random() * (max - min + 1) + 1;
  return Math.floor(random);
};

const converWithUser = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const hiUser = `Hello, ${userName}!`;
  console.log(hiUser);
  return userName;
};

const showFile = (file) => console.log(file);

const getFile = () => readlineSync.question('Yuor answer: ');

const checkAnswer = (check, response, name) => (check === response ? 'Correct!' : `'${response}' is wrong answer ;(. Correct answer was '${check}'.\nLet's try again, ${name}!`);

export {
  converWithUser, getRandomeNumber, showFile, getFile, checkAnswer,
};
