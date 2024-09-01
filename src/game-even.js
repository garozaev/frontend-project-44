import readlineSync from 'readline-sync';

const random = () => {
    const randomeNuber = Math.floor(Math.random() * 10);
    return randomeNuber;
};

const check = (number, answer, name) => {
    if (answer !== 'yes' && answer !== 'no') {
        return `is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${name}`;
    }
    if (number % 2 === 0) {
        return answer === 'yes' ? 'Correct!' : `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`;
    }
    if (number % 2 !== 0) {
        return answer === 'no' ? 'Correct!' : `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
    }
    return 'err';
};

const gameEven = () => {
    const getname = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    readlineSync.question(`Hello, ${getname}!`);
    readlineSync.question('Ansver "yes" if the number is even, otherwise ansver "no". ');
    let result;
    for (let i = 0; i < 3; i += 1) {
        const numberRandom = random();
        readlineSync.question(`Question: ${numberRandom} `);
        const yourAnswer = readlineSync.question('Yuor answer: ');
        const checkAnswer = check(numberRandom, yourAnswer, getname);
        if (checkAnswer !== 'Correct!') {
            i = 3;
            result = checkAnswer;
            return result;
        }
        result = `Congratulation: ${getname}`;
    }
    // result = `Congratulation: ${getname}`;
    return result;
};
console.log(gameEven());

export default gameEven;
