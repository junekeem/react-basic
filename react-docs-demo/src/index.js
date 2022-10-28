import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (<h2>It is {new Date().toLocaleTimeString()}</h2>);
  root.render(element);
}

setInterval(tick, 1000);

// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );
