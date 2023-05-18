const sortByDice = (counter: {}) => {
  return Object.entries(counter).sort(([a,], [b,]) => Number(b) - Number(a));
};

const sortByCounter = (counter: {}) => {
  return Object.entries(counter).sort(([,a], [,b]) => Number(b) - Number(a));
};

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const dices = [dice1, dice2, dice3];
  const diceCounter: {[key: number]: number } = {};

  dices.forEach(dice => {
    if (dice < 1 || dice > 6) {
      throw new Error("Dice out of number range");
    }
    diceCounter[dice] = diceCounter[dice] ? diceCounter[dice] + 1 : 1;
  });

  let sorted;
  if (Object.keys(diceCounter).length === 3) {
    sorted = sortByDice(diceCounter);
    return Number(sorted[0][0]);
  }
  sorted = sortByCounter(diceCounter);
  return Number(sorted[0][0]) * Number(sorted[0][1]);
};
