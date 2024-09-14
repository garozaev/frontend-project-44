import readlineSync from 'readline-sync';

const gameEngine = (user, cond, question, check, count, countFinish, result) => {
    let gameAnswer;
    if (result === 'Start!') {
        readlineSync.question(`Hello, ${user}!`);
        readlineSync.question(`${cond}`);
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        const answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        readlineSync.question(`${answer} `);
        gameAnswer = answer;
    }
    // const userName = getName;
    if (result === 'Correct!' && count < countFinish - 1) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        const answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        readlineSync.question(`${answer} `);
        gameAnswer = answer;
    }
    if (result === 'Correct!' && count === countFinish - 1) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        const answer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        readlineSync.question(`${answer} `);
        gameAnswer = `Congratulation: ${user} `;
    }
    return gameAnswer;
};

export default gameEngine;

// count <= 2 && count !== 0
