import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("component did mount")
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log("component will unmount")
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
root.render(<Clock />);

// function Clock(props) {
//   return (
//     <div>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }
//
// function tick() {
//   root.render(<Clock/>);
// }
//
// setInterval(tick, 1000);