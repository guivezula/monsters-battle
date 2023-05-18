interface ResultProps {
  positives: string;
  negative: string;
  zeros: string;
}

const filterFractions = (numbers: number[], callback: (n: number) => boolean) => {
    return numbers.filter(callback).length / numbers.length;
}

export const numbersFractionCalculator = (numbers: number[]): ResultProps => {
  const positives = filterFractions(numbers, (number) => number > 0).toFixed(6);
  const negative = filterFractions(numbers, (number) => number < 0).toFixed(6);
  const zeros = filterFractions(numbers, (number) => number === 0).toFixed(6);
  return {
    positives,
    negative,
    zeros,
  };
};
