/*
 *****
 * Author: Torrey Meade
 * Version: 1.0
 * Description: This is my first program using Lodash(_dash)
 ******
 */

// This object contains all of my lodash methods - represents my library
const _ = {
  // _dash number method
  /*
   clamps number w/in inclusive range w/in lower (2nd parameter) and upper (3rd parameter) bounds
  */
  clamp(number, lower, upper) {
    // Math.max takes in parameters (numbers) and returns the highest number
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  // _dash number method
  /*
   Checks if a number is within the range of the second two parameters
  */
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
  /*
   Splits a string into an array of words.
  */
  words(str) {
    let arr = str.split(" ");
    return arr;
  },

  // _dash string method
  /*
   This method will pad the string evenly on both sides.  If padding number is not even, extra padding goes to the right side.  First parameter is the str, 2nd is the desired length of the string 
   */
  pad(str, number) {
    // returns the same string if it is the lenght is equal to or greater than number parameter
    if (str.length >= number) {
      return str;
    } else {
      let difference = number - str.length;
      let padding = difference / 2;

      // will enter here if the padding is not even
      if (padding % 2 !== 0) {
        let pad = " ";
        let padLeft = (difference - 1) / 2;
        let padRight = padLeft + 1;
        let padForLeft = "";
        let padForRight = "";

        // creates the left padding as a string
        for (let i = 0; i < padLeft; i++) {
          padForLeft += pad;
        }

        // creates right padding as a string
        for (let i = 0; i < padRight; i++) {
          padForRight += pad;
        }

        return `${padForLeft}${str}${padForRight}`;
      } else {
        // will enter here if even
        let pad = " ";
        let padAll = pad.repeat(padding);
        return `${padAll}${str}${padAll}`;
      }
    }
  },

  // _dash object method
  /*
   Checks if the object has a specified key value (2nd param)
  */
  has(obj, key) {
    if (obj.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  },

  // _dash object method
  /*
  This method will take in an object, iterate through that object, and makes each key its value, and its value its key, essentially swaping the two
  */
  invert(obj) {
    let newObj = {};

    for (let key in obj) {
      originalValue = key;
      newObj.originalValue = key;
    }

    return newObj;
  },

  //_dash object method
  /*
   Takes in an object and predicate function.  Will return a matching key
  */
  findKey(obj, funct) {
    for (let key in obj) {
      if (funct(obj[key])) {
        return key;
      }
    }
    return undefined;
  },

  // _dash array method
  /*
    This method takes in an array and a number of elements to drop from the beginning
    of the array.  Returns the array minus the numToDrop from the front.
  */
  drop(arr, numToDrop = 1) {
    return arr.slice(numToDrop);
  },

  // _dash array method
  /*
  drops elements from the beginning of the array until an element causes the predicate function to be falsy
  */
  dropWhile(arr, predicate) {
    // findIndex looks for the first truthy value, negating the value causes us to return false values until we receive a truthy
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    });

    // Uses my previously created .drop() method.  This refers to the current object
    let droppedArray = this.drop(arr, dropNumber);

    return droppedArray;
  },

  // _dash array method
  /*
    splits an array into even chunks.  Even they aren't even, the final chunk will have the final elements
  */
  chunk(arr, size = 1) {
    let chunkedArr = [];

    for (let i = 0; i < arr.length; i += size) {
      let chunks = arr.slice(i, i + size);
      chunkedArr.push(chunks);
    }

    return chunkedArr;
  },
};

// Do not write or modify code below this line.
module.exports = _;
