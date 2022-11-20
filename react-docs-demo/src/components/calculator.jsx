import React from "react";
import { TemperatureInput } from "./temperature-input";

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  // handleChange(temperature) {
  //   this.setState({
  //     temperature: temperature
  //   })
  // }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={temperature}/>
      </>
    );
  }

}