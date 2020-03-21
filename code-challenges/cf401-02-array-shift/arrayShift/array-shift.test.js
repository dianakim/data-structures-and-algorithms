'use strict';

const insertShiftArray = (anArray, valToAdd) => {
  /*
  Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
  */
  const arrLength = anArray.length;
  const newValIndex = Math.ceil(arrLength / 2);

  for (let i = arrLength - 1; i >= newValIndex; i--) {
    // Move the current value at anArray[i] to index i + 1
    anArray[i + 1] = anArray[i];
  }

  anArray[newValIndex] = valToAdd;

  return anArray;
}

insertShiftArray([2,4,6,8], 5);

describe('Testing Challenge 2', () => {
  it('should return an array with the new value added at the middle index', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });
});