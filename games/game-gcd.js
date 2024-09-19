import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomeNuber = () => Math.floor(Math.random() * 20);

const getDCG = (number1, number2) => {
    let x = number1;
    let y = number2;
    if (x > y && x % y === 0) {
        return y;
    }
    if (x < y && y % x === 0) {
        return x;
    }
    while (x !== y) {
        if (x > y) {
            x -= y;
        } else {
            y -= x;
        }
    }
    return x;
};

const gameGcd = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const gameСond = 'Find the greatest common divisor of given numbers.';
    const countMax = 3;
    let result;
    for (let i = 0; i < countMax; i += 1) {
        const gemeRound = i;
        const num1 = randomeNuber();
        const num2 = randomeNuber();
        const questRound = `${num1} ${num2}`;
        const answerCheck = (getDCG(num1, num2)).toString();
        result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
        if (result !== 'Correct!') {
            i = countMax;
        }
    }
    return result;
};

export default gameGcd;
