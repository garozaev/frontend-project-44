import readlineSync from 'readline-sync';
import gameEngine from './index.js';

const gameQuestion = () => Math.floor(Math.random() * 20);

const gameEven = () => {
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    const gameСond = 'Ansver "yes" if the number is even, otherwise ansver "no".';
    const countMax = 3;
    let result = 'Start!';
    for (let i = 0; i < countMax; i += 1) {
        const count = i;
        const questRound = gameQuestion();
        const answerCheck = questRound % 2 === 0 ? 'yes' : 'no';
        result = gameEngine(userName, gameСond, questRound, answerCheck, count, countMax, result);
        if (result !== 'Correct!') {
            i = 3;
            return result;
        }
    }
    return result;
};

export default gameEven;

// if (answer !== 'yes' && answer !== 'no') {
//  return answerGame === `is wrong answer; (.Correct answer was 'yes' or 'no'.\nLet's try again, ${name}`;
// }
// const random = () => {
//     const randomeNuber = Math.floor(Math.random() * 10);
//     return randomeNuber;
// };

// const check = (number, answer, name) => {
//     if (answer !== 'yes' && answer !== 'no') {
//         return `is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${name}`;
//     }
//     if (number % 2 === 0) {
//         return answer === 'yes' ? 'Correct!' : `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`;
//     }
//     if (number % 2 !== 0) {
//         return answer === 'no' ? 'Correct!' : `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
//     }
//     return 'err';
// };

// const gameEven = () => {
//     const getname = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
//     readlineSync.question(`Hello, ${getname}!`);
//     readlineSync.question('Ansver "yes" if the number is even, otherwise ansver "no". ');
//     let result;
//     for (let i = 0; i < 3; i += 1) {
//         const numberRandom = random();
//         readlineSync.question(`Question: ${numberRandom} `);
//         const yourAnswer = readlineSync.question('Yuor answer: ');
//         const checkAnswer = check(numberRandom, yourAnswer, getname);
//         if (checkAnswer !== 'Correct!') {
//             i = 3;
//             result = checkAnswer;
//             return result;
//         }
//         result = `Congratulation: ${getname}`;
//     }
//     return result;
// };
