import './app.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Max',
  lastName: 'Mustermann'
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h1>Hello, {formatName(user)}</h1>
      {getGreeting(user)}
    </>
  );
}

export default App;
