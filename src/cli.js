import readlineSync from 'readline-sync';

const converWithUser = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const hiUser = `Hello, ${userName}!`;
  console.log(hiUser);
  return userName;
};

export default converWithUser;
