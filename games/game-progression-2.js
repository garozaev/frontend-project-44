import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const randomNumber = () => {
    const min = 1;
    const max = 10;
    const random = Math.random() * (max - min + 1) + 1;
    return Math.floor(random);
};

const progressionRow = (difference) => {
    const maxN = 10;
    const rowStart = Math.floor(Math.random() * 100);
    let number = rowStart;
    const progressionNumbers = [];
    for (let i = 0; i < maxN; i += 1) {
        number += difference;
        progressionNumbers.push(number);
    }
    return progressionNumbers;
};

const getlostNum = (numbers) => {
    const array = numbers;
    const indexGetlost = Math.floor(Math.random() * (array.length));
    const secretRow = [];
    for (let i = 0; i < array.length; i += 1) {
        if (i === indexGetlost) {
            array[i] = '..';
            secretRow.push(array[i]);
        } else {
            secretRow.push(array[i]);
        }
    }
    return secretRow;
};

const lookForNamber = (array, difference) => {
    let result;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === '..' && i !== array.length - 1) {
            result = array[i + 1] - difference;
        }
        if (array[i] === '..' && i === array.length - 1) {
            result = array[i - 1] + difference;
        }
    }
    return result;
};

const gameProgression = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const gameСond = 'What number is missing in the progression?';
    const countMax = 3;
    let result;
    for (let i = 0; i < countMax; i += 1) {
        const gemeRound = i;
        const step = randomNumber();
        const roundNambers = progressionRow(step);
        const roundGetlostNumber = getlostNum(roundNambers);
        const questRound = `${roundGetlostNumber}`;
        const answerCheck = (lookForNamber(roundGetlostNumber, step)).toString();
        result = gameEngine(userName, gameСond, gemeRound, questRound, answerCheck, countMax);
        if (result !== 'Correct!') {
            i = countMax;
        }
    }
    return result;
};

console.log(gameProgression());
