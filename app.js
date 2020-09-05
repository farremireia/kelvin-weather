//The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
const kelvin = 0;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit. Fahrenheit = Celsius * (9/5) + 3
let fahrenheit = celsius * (9/5) + 32;
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
//Use console.log and string interpolation to log the temperature in fahrenheit to the console. Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
console.log('The temperature is ${fahrenheit} degrees Fahrenheit.');