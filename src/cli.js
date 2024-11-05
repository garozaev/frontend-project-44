import readlineSync from 'readline-sync';

const greetAndGetUserName = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const greetUser = `Hello, ${userName}!`;
  console.log(greetUser);
  return userName;
};

export default greetAndGetUserName;
