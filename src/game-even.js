import readlineSync from 'readline-sync';

const gameEven = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const hiUser = `Hello, ${userName}!`;
    return hiUser;
};
// console.log(gameEven());

export default gameEven;
