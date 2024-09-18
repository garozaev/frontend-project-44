import readlineSync from 'readline-sync';
import gameEngine from './index.js';

const randomeNuber = () => Math.floor(Math.random() * 10);
const gatIndex = () => Math.floor(Math.random() * 3);

const getSing = () => {
    const index = gatIndex();
    const singsAr = ['-', '+', '*'];
    const sing = singsAr.at(index);
    return sing;
};

const calc = (number1, sing, number2) => {
    let x;
    switch (sing) {
        case '-': x = number1 - number2;
            return x;
        case '+': x = number1 + number2;
            return x;
        case '*': x = number1 * number2;
            return x;
        default: return 'err';
    }
};

const gameCalc = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const gameСond = 'What is the result of the expression?';
    const countMax = 3;
    let result;
    for (let i = 0; i < countMax; i += 1) {
        const gemeRound = i;
        const num1 = randomeNuber();
        const num2 = randomeNuber();
        const operation = getSing();
        const questRound = `${num1} ${operation} ${num2}`;
        const answerCheck = (calc(num1, operation, num2)).toString();
        result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
        if (result !== 'Correct!') {
            i = countMax;
        }
    }
    return result;
};

export default gameCalc;
