// Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  let diff = rangeEnd - rangeStart;
  let randNum = Math.floor(Math.random() * (diff + 1)) + rangeStart;
  return randNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
