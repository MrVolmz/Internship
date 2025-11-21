export const getRandomInteger = (max) => Math.floor(Math.random() * (max + 1));

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    const j = getRandomInteger(i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

