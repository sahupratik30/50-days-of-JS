// Write a program to reverse a string

const str = "JavaScript is awesome";

function reverseAString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  return revStr;
}

console.log(`Reversed string is: ${reverseAString(str)}`);
