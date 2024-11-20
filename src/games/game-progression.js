import runGame from '../index.js';
import { generateRandomeNumber, getRandomeIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 0;
const maxStart = 100;
const length = 10;
const minStep = 1;
const maxStep = 10;

const getArethmeticProgression = (progressionStart, progressionStep, progressionLength) => {
  const progression = [progressionStart];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] += progressionStep;
    progression.push(progression[i]);
  }
  return progression;
};

const generateRound = () => {
  const begin = generateRandomeNumber(minStart, maxStart);
  const step = generateRandomeNumber(minStep, maxStep);
  const progression = getArethmeticProgression(begin, step, length);
  const randomeIndex = getRandomeIndex(progression);
  const correctAnswer = String(progression[randomeIndex]);
  progression[randomeIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => runGame(description, generateRound);

export default runProgression;
