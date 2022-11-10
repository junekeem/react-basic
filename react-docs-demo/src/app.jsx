import './app.css';
import { Welcome } from './components/welcome'

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

function App() {
  return (
    <>
      <Welcome name="Adam"></Welcome>
      <Welcome name="Barbara"></Welcome>
      <Welcome name="Caesar"></Welcome>
    </>
  );
}

export default App;
