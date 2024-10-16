const runGame = (game) => {
  const isMaxRound = 3;
  let result;
  for (let i = 0; i < isMaxRound; i += 1) {
    result = game();
    if (result !== true) {
      i = isMaxRound;
    }
  }
  return result;
};

export default runGame;
