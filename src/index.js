import readlineSync from 'readline-sync';

const roundsCount = 3;

const greetAndGetUserName = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const greetUser = `Hello, ${userName}!`;
  console.log(greetUser);
  return userName;
};

const runGame = (description, generateRound) => {
  const userName = greetAndGetUserName();
  console.log(description);
  let result;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(result);
      return result;
    }
    console.log('Correct!');
  }
  result = `Congratulations, ${userName}!`;
  console.log(result);
  return result;
};

export default runGame;
