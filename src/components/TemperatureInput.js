import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({ scale, temp, onChangeHandler }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input
        type="text"
        value={temp}
        onChange={(e) => onChangeHandler(e, scale)}
      ></input>
    </fieldset>
  );
}
