import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const gameQuestion = () => Math.floor(Math.random() * 20);

const gameEven = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const gameСond = 'Ansver "yes" if the number is even, otherwise ansver "no".';
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
