const runGame = (game) => {
  const roundCount = 3;
  let result;
  for (let i = 0; i < roundCount; i += 1) {
    result = game();
    if (result !== true) {
      i = roundCount;
    }
  }
  return result;
};

export default runGame;
