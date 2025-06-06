const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue,1);
};

const power = function(number, exponent) {
  return Math.pow(number, exponent);
	
};

const factorial = function(number) {
  let product = 1;
	for(let i = number; i > 0; i--){
    product*=i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
