const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let control = {};
  let newArr = [];
  let shouldSkipNext = false;
  let isPrevSkipped = false;

  control["--discard-next"] = function(i) {   
    shouldSkipNext = true;
  };
  
  control["--discard-prev"] = function(i) {    
    newArr.pop();    
  };

  control["--double-next"] = function(i) {   
    if (arr[i + 1]) {    
    newArr.push(arr[i + 1]);    
    }
  };

  control["--double-prev"] = function(i) {  
    if (arr[i - 1]) {
    newArr.push(arr[i - 1]);
    }   
  };
  

  arr.forEach((elem,i) => {
    if(shouldSkipNext) {
      shouldSkipNext = false;
      isPrevSkipped = true;
      return;
    }

    if (control[elem] && isPrevSkipped) {
      return;
    }
    if (control[elem] && !isPrevSkipped) {
        return control[elem](i);
    } 
    newArr.push(elem);
    isPrevSkipped = false;    
  });  

    return newArr;
}


module.exports = {
  transform
};

