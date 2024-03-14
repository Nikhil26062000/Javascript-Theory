/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [
      ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
      "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
      "..-", "...-", ".--", "-..-", "-.--", "--.."
  ];

  const transformations = new Set();

  for (let word of words) {
      let morseRepresentation = "";
      for (let char of word) {
          // Convert each character to its Morse code equivalent
          morseRepresentation += morseCodes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
      }
      transformations.add(morseRepresentation);
  }

  return transformations.size;
};