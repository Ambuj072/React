import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);

// Using React.Fragment to wrap both elements
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    <App />         
  </>
);
