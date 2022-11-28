import generateID from './utilities';
import languageConstructs from './languageConstructs';

/**
 * @param {String} [lang] expected language (default "en")
 * @param {string[]} [separators=['-', '.', '_']] - list of acceptable separators between words (default ['-', '.', '_'])
 * @return {String} generated human readable identifier
 * */

const rurid = (lang: string = 'en', separators: string[] = ['-', '.', '_']): string => {
  const adjectives = languageConstructs[lang]['adjectives'];
  const nouns = languageConstructs[lang]['nouns'];

  return generateID(adjectives, separators, nouns);
};

export default rurid;
