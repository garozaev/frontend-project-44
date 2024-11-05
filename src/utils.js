const generateRandomeNumber = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

export default generateRandomeNumber;
