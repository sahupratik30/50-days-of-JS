// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = "XeroX";

function getTheGapX(str) {
  let firstX = str.indexOf("X");
  let lastX = str.lastIndexOf("X");
  if (firstX === -1 || lastX === -1) return -1;
  return lastX - firstX;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
