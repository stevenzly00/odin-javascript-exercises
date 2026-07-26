const convertToCelsius = function(f) {
  let c=0;
  c=(f-32)*5/9;
  if(!Number.isInteger(c)) c=Math.round(c*10)/10;
  return c;
};

const convertToFahrenheit = function(c) {
  let f=0;
  f=9*c/5+32;
  if(!Number.isInteger(f)) f=Math.round(f*10)/10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
