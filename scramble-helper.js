// Create a function that reverses a word
function reverseWord(word) {
  let wordArray = word.split('');
  wordArray.reverse();
  return wordArray.join('');
}

// Create a function that takes an array of words and returns a new array of the
// words with each word reversed.
function reversedWordArray(array) {
  let newArray = []; 
  array.forEach((word) => {
    newArray.push(reverseWord(word));
  });
  return newArray;
}

// Create a function that returns a random word from an array

function getRandomWord(wordArray) {
  const length = wordArray.length;
  const min = Math.ceil(0);
  const max = Math.floor(length - 1);
  const wordIndex = Math.floor(Math.random() * (max - min)) + min;
  return wordArray[wordIndex];

}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function reversedMap(array) {
  const emptyMap = new Map();
  array.forEach((word) => {
    emptyMap.set(reverseWord(word), word);
  });
  return emptyMap;
}

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
