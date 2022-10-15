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
		throw new Error('input argument must be an array')
	}

	let transformedArray = []

	let doubleNext = false
	let discardNext = false
	let prevHasBeenDiscarded = false

	for (let x of arr) {
		switch (x) {
			case '--discard-next':
				discardNext = true
				break;
			case '--double-next':
				doubleNext = true
				break;
			case '--discard-prev':
				if (transformedArray.length > 0 && !prevHasBeenDiscarded) {
					transformedArray.pop()	
					prevHasBeenDiscarded = false
				}
				break;
			case '--double-prev':
				if (transformedArray.length > 0 && !prevHasBeenDiscarded) {
					transformedArray.push(transformedArray[transformedArray.length - 1])
					prevHasBeenDiscarded = false
				}
				break;
			default:
				if (discardNext) {
					discardNext = false
					prevHasBeenDiscarded = true
					break;
				}

				prevHasBeenDiscarded = false;
				transformedArray.push(x)
				if (doubleNext) {
					doubleNext = false
					transformedArray.push(x)
				}
		}
	}

	return transformedArray
}


	


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
