import React from "react";
import { BoilingVerdict } from "./calculator";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({
    //   temperature: event.target.value
    // })
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </fieldset>
    );
  }

}