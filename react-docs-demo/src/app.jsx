import './app.css';
import { Welcome } from './components/welcome'
import { Clock } from "./components/clock";
import { EventDemo } from "./components/event-demo";
// import { LoginControl } from "./components/login-control";
import { ConditionalRenderingDemo } from "./components/conditional-rendering-demo";
import { Form } from "./components/form";
import { Calculator } from "./components/calculator";
import { FilterableProductTable } from "./components/demo/filterable-product-table";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS}/>
      <Welcome name="User"></Welcome>
      <Clock />
      <EventDemo />
      {/*<LoginControl />*/}
      <ConditionalRenderingDemo />
      <Form />
      <Calculator />
    </>
  );
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

export default App;
