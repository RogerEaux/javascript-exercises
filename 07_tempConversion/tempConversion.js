const convertToCelsius = function(temp) {
  let convertedTemp;
  convertedTemp = Math.round((temp-32)*5/9*10)/10;
  
  return convertedTemp;
};

const convertToFahrenheit = function(temp) {
  let convertedTemp;
  convertedTemp = Math.round((temp*9/5 + 32)*10)/10;
  
  return convertedTemp;
};

// Do not edit below this lineT
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
