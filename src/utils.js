const generateRandomeNumber = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

const getRandomeIndexFromCollection = (coll) => {
  const min = 0;
  const max = coll.length - 1;
  return generateRandomeNumber(min, max);
};

export { generateRandomeNumber, getRandomeIndexFromCollection };
