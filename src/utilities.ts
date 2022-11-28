export const getRandomElement = (A: string[]): string => {
  return A[Math.floor(Math.random() * A.length)];
};

const generateID = (adjectives: string[], separators: string[], nouns: string[]): string => {
  return `${getRandomElement(adjectives)}${getRandomElement(separators)}${getRandomElement(nouns)}`;
};

export default generateID;
