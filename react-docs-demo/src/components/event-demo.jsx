import React from "react";

export class EventDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
    // In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick,
    // this will be undefined when the function is actually called.
    this.toggleButton = this.toggleButton.bind(this);
    // ES7+ (ES2016) you can use the experimental function bind syntax operator :: to bind. It is a syntactic sugar:
    // this.toggleButton = ::this.toggleButton;
  }

  toggleButton() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  // If calling bind annoys you, there are two ways you can get around this. You can use public class fields syntax to correctly bind callbacks:
  // For ES6+ (ES2015) you can also use the ES6+ arrow function (=>) to be able to use this.
  // toggleButton = () => {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }))
  // }

  render() {
    return (
      <>
        <button onClick={this.toggleButton}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </>
    );
  }
}