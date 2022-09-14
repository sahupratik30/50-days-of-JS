// Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = "12:10AM";

function convertTo24HrsFormat(time) {
  let timeArr = time.split(":");
  let timeFormat = timeArr[1].slice(-2);
  let minutes = timeArr[1].substring(0, timeArr[1].length - 2);
  timeArr[0] = timeArr[0].length === 1 ? `0${timeArr[0]}` : timeArr[0];
  timeArr[1] = minutes.length === 1 ? `0${minutes}` : minutes;
  let hours = +timeArr[0];
  if (timeFormat === "PM" && hours < 12) {
    timeArr[0] = hours + 12 + "";
  } else if (timeFormat === "AM" && hours === 12) {
    timeArr[0] = "00";
  }
  let result = timeArr.join(":");
  return result;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
