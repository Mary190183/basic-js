const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let buf = "", add = [], res =[];

  if (options.separator === undefined) {
      options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
  }

  if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }

  if (options.addition === undefined) {
      options.addition = "";
  }
  
  buf = String(str);

  for (let j = 0; j < options.additionRepeatTimes; j++){
      add.push(String(options.addition));
  }

  buf += add.join(`${options.additionSeparator}`);
  console.log(buf)
  for (let i = 0; i < options.repeatTimes; i++){
      res.push(buf);
  }

  return res.join(`${options.separator}`);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
