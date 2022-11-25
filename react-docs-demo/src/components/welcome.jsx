// Two components are equivalent from React’s point of view.
export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// export class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }