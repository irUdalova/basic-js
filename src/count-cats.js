const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        cats = cats + 1;
      }
    }
  }
  return cats;  
}

// let matrix = [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2],
//    ];

// countCats(matrix);   

module.exports = {
  countCats
};


