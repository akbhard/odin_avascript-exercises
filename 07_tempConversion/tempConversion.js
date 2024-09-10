function convertToCelsius(number){
  
  let celsius = (number - 32) * (5/9)
  return Math.round(celsius * 10)/10
}
// } (32°F − 32) × 5/9 = 0°C

function convertToFahrenheit(number){
  
  let fahrenheit = (number * (9/5)) + 32
  return Math.round(fahrenheit * 10)/10
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
