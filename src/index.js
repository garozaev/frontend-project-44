import readlineSync from 'readline-sync';

const gameEngine = (user, condition, round, question, check, finish) => {
    let answer;
    if (round === 0) {
        console.log(`Hello, ${user}!`);
        console.log(`${condition}`);
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${check}'.\nLet's try again, ${user} `;
        if (answer === 'Correct!') {
            console.log(`${answer} `);
        }
    }
    if (round < finish - 1 && round !== 0) {
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${check}'.\nLet's try again, ${user} `;
        if (answer === 'Correct!') {
            console.log(`${answer} `);
        }
    }
    if (round === finish - 1) {
        console.log(`Question: ${question} `);
        const playerAnswer = readlineSync.question('Yuor answer: ');
        answer = check === playerAnswer ? 'Correct!' : `'${playerAnswer}' is wrong answer ;(. Correct answer was '${check}'.\nLet's try again, ${user}!`;
        if (answer === 'Correct!') {
            answer = `Correct!\nCongratulations, ${user}!`;
        }
    }
    return answer;
};

export default gameEngine;
