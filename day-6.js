// Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  let strArray = str.split(" ");
  let resultStr = "";
  for (let i = 0; i < wordLimit; i++) {
    resultStr =
      i === wordLimit - 1
        ? resultStr + strArray[i]
        : resultStr + strArray[i] + " ";
  }
  return resultStr;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
