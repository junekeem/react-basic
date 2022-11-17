import './app.css';
import { Welcome } from './components/welcome'
import { Clock } from "./components/clock";
import { EventDemo } from "./components/event-demo";
// import { LoginControl } from "./components/login-control";
import { ConditionalRenderingDemo } from "./components/conditional-rendering-demo";
import { Form } from "./components/form";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

function App() {
  return (
    <>
      <Welcome name="User"></Welcome>
      <Clock />
      <EventDemo />
      {/*<LoginControl />*/}
      <ConditionalRenderingDemo />
      <Form />
    </>
  );
}

export default App;
