import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date()
    }
    this.handleTimestamp = this.handleTimestamp.bind(this);
  }

  handleTimestamp (timestamp) {
    this.setState({
      timestamp: timestamp
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      timestamp: new Date()
    })
  }

  render() {
    return (
      <div>
        {this.state.timestamp.toLocaleString()}
      </div>
    );
  }

}