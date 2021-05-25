/******
 * Author: Torrey Meade
 * Version: 1.0
 * Description: This is my first program using Lodash(_dash)
 *******/

// This object contains all of my lodash methods? - represents my library
const _ = {
  // _dash number method
  clamp(number, lower, upper) {
    // Math.max takes in parameters (numbers) and returns the highest number
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  // _dash number method
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    // checks if the start value is larger then end value
    if (start > end) {
      // x will temporarily store start, so that we may swap values
      let x = start; //
      start = end;
      end = x;
    }

    // if number >= start && number < end, return true or false
    return number >= start && number < end ? true : false;
  },
  // _dash string method
  words(str) {
    let arr = str.split(" ");
    return arr;
  },
};

// Do not write or modify code below this line.
module.exports = _;
