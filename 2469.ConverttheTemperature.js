var convertTemperature = function(celsius) {
const kelvin =  celsius + 273.15;
const Fahrenheit = celsius * 1.80 + 32.00;
 const ans = [kelvin,Fahrenheit]
return ans
}
const celsius=36.50
console.log(convertTemperature(celsius));