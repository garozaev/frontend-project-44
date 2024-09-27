import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomeNumber = () => {
    const min = 1;
    const max = 20;
    const random = Math.random() * (max - min + 1) + 1;
    return Math.floor(random);
};

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
        const num1 = randomeNumber();
        const num2 = randomeNumber();
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
