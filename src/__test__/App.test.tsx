import React from 'react';
import ReactDOM from 'react-dom';
import App from '../TS/App';
import Calculator from '../TS/Calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing calculator', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
