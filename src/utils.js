const generateRandomeNumber = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

const getRandomeIndex = (collection) => {
  const index = generateRandomeNumber(0, collection.length - 1);
  return index;
};

export { generateRandomeNumber, getRandomeIndex };
