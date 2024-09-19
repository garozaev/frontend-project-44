import readlineSync from 'readline-sync';

const gameEngine = (user, condition, round, question, check, finish) => {
    let answer;
    if (round === 0) {
        readlineSync.question(`Hello, ${user}!`);
        readlineSync.question(`${condition}`);
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (answer === 'Correct!') {
            readlineSync.question(`${answer} `);
        }
    }
    if (round < finish - 1 && round !== 0) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (answer === 'Correct!') {
            readlineSync.question(`${answer} `);
        }
    }
    if (round === finish - 1) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (answer === 'Correct!') {
            answer = `Correct!\nCongratulation: ${user} `;
        }
    }
    return answer;
};

export default gameEngine;
