function getStringLength(value) {
  if (typeof value !== 'string') return 0;
  return value.length;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  if (typeof value !== 'string') return '';
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  if (typeof value !== 'string') return '';
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  if (typeof value !== 'string') return '';
  return value.trimEnd();
}

function repeatString(str, times) {
  if (typeof str !== 'string' || typeof times !== 'number' || times <= 0)
    return '';
  return str.repeat(times);
}

function removeFirstOccurrences(str, value) {
  if (typeof str !== 'string' || typeof value !== 'string') return str || '';
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function removeLastOccurrences(str, value) {
  if (typeof str !== 'string' || typeof value !== 'string') return str || '';
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function sumOfCodes(str) {
  if (typeof str !== 'string') return 0;
  return [...str].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function startsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') return false;
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') return false;
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${mm}:${ss}`;
}

function reverseString(str) {
  if (typeof str !== 'string') return '';
  return [...str].reverse().join('');
}

function orderAlphabetically(str) {
  if (typeof str !== 'string') return '';
  return [...str].sort().join('');
}

function containsSubstring(str, substring) {
  if (typeof str !== 'string' || typeof substring !== 'string') return false;
  return str.includes(substring);
}

function countVowels(str) {
  if (typeof str !== 'string') return 0;
  const matches = str.match(/[aeiouy]/gi);
  return matches ? matches.length : 0;
}

function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return cleaned === [...cleaned].reverse().join('');
}

function findLongestWord(sentence) {
  if (typeof sentence !== 'string') return '';
  const words = sentence.split(/\s+/);
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

function reverseWords(str) {
  if (typeof str !== 'string') return '';
  return str
    .split(' ')
    .map((w) => [...w].reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  if (typeof str !== 'string') return '';
  return [...str]
    .map((ch) =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace(/^Hello,\s|!$/g, '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function extractEmails(str) {
  if (typeof str !== 'string') return [];
  return str.split(';');
}

function encodeToRot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return str.replace(/[A-Za-z]/g, (ch) => output[input.indexOf(ch)]);
}

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suit = value.slice(-1);
  const rank = value.slice(0, -1);
  return suits.indexOf(suit) * 13 + ranks.indexOf(rank);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
