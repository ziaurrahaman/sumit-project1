import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/Converter";
// import BoilingVerdict from "./Boiling_verdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  render() {
    const { temperature, scale } = this.state;
    const onTemperatureChange = (e, scale) => {
      this.setState({
        temperature: e.target.value,
        scale,
      });
    };
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          onChangeHandler={onTemperatureChange}
          temp={celsius}
        />
        <TemperatureInput
          scale="f"
          onChangeHandler={onTemperatureChange}
          temp={fahrenheit}
        />
        {/* <BoilingVerdict celsius={parseFloat()}></BoilingVerdict> */}
      </>
    );
  }
}
