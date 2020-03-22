/**
 * @param {*} num input number
 * @param {*} arr Array of number
 * @description Input a number and a sorted array, output the two nearest elements
 *              If input number larger than the maximum element in the array or smaller than
 *                 the minimum number in the array, function will return false
 * @example Array = [1, 3, 5, 6, 8]
 *          Input 4 - Output [3, 5]
 *          Input 8 - Output [8]
 *          Input 0 - Output false
 *          Input 9 - Output false
 *          Input 1 - Output [1, 3]
 */
export const selectNearestElems = (num, arr) => {
  if (num < arr[0] || num > arr[arr.length - 1]) {
    return false;
  }

  let twoNearestElems = [];
  arr.forEach(item => {
    if (item <= num) {
      twoNearestElems[0] = item;
    } else if (item >= num && twoNearestElems.length === 1) {
      twoNearestElems[1] = item;
    }
  });

  return twoNearestElems;
};

/**
 * @description Return true if screen width smaller or equal 576px
 */
export const isSmallScreen = () => {
  return window.screen.width <= 768;
};
