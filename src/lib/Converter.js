export function toCelsius(fahreinheit) {
  return ((fahreinheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  } else {
    const output = convertTo(input);
    console.log("MathRound", Math.round(output));
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
}
