import React from "react";
import './app.css';

function App() {
  const name = 'World'
  return (
    <>
      <h1>Hello {name}!</h1>
      <h1>Welcome</h1>
      {name && <h1> Hello {name}!</h1>}
      {
        ['🍔', '🍟'].map(item => (
          <h1>{item}</h1>
        ))
      }
    </>
    // <React.Fragment>
    //   <h1>Hello {name}!</h1>
    //   <h1>Welcome</h1>
    // </React.Fragment>
  );
}

export default App;
