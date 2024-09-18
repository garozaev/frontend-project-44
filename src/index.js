import readlineSync from 'readline-sync';

const gameEngine = (user, cond, round, question, check, countFinish) => {
    let gameAnswer;
    if (round === 0) {
        readlineSync.question(`Hello, ${user}!`);
        readlineSync.question(`${cond}`);
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        gameAnswer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (gameAnswer === 'Correct!') {
            readlineSync.question(`${gameAnswer} `);
        }
    }
    if (round < countFinish - 1 && round !== 0) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        gameAnswer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (gameAnswer === 'Correct!') {
            readlineSync.question(`${gameAnswer} `);
        }
    }
    if (round === countFinish - 1) {
        readlineSync.question(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        gameAnswer = check === playerAnswer ? 'Correct!' : `${playerAnswer} is wrong answer ;(. Correct answer was ${check}.\nLet's try again, ${user} `;
        if (gameAnswer === 'Correct!') {
            gameAnswer = `Correct!\nCongratulation: ${user} `;
        }
    }
    return gameAnswer;
};

export default gameEngine;
