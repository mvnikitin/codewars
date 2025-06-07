// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
  const phrase = string.split(" ");
  const result = [];
  phrase.forEach((word) => {
    if (word.length > 4) {
      // console.log(word.split("").reverse().join(""));
      result.push(word.split("").reverse().join(""));
    } else {
      result.push(word);
    }
  });
  return result.join(" ");
}

str = "This is another test";
console.log(spinWords(str));
