import './app.css';
import { Welcome } from './components/welcome'
import { Clock } from "./components/clock";
import { EventDemo } from "./components/event-demo";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

function App() {
  return (
    <>
      <Welcome name="User"></Welcome>
      <Clock />
      <EventDemo />
    </>
  );
}

export default App;
