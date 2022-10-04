// Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = "+919876543210";

function validateMobile(number) {
  let regex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  return regex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
