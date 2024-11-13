import runGame from '../index.js';
import { generateRandomeNumber, getRandomeIndexFromCollection } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStartNunber = 0;
const maxStartNunber = 100;
const progressionLength = 10;
const minStep = 1;
const maxStep = 10;

const getArethmeticProgression = (beginNunber, step, length) => {
  let number = beginNunber;
  const numbers = [];
  for (let i = 0; i < length; i += 1) {
    number += step;
    numbers.push(number);
  }
  return numbers;
};

const generateRound = () => {
  const beginNunber = generateRandomeNumber(minStartNunber, maxStartNunber);
  const step = generateRandomeNumber(minStep, maxStep);
  const progression = getArethmeticProgression(beginNunber, step, progressionLength);
  const randomeIndex = getRandomeIndexFromCollection(progression);
  const correctAnswer = String(progression[randomeIndex]);
  progression[randomeIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => runGame(description, generateRound);

export default runProgression;
