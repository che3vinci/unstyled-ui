import React from 'react';
import ReactDOM from 'react-dom/client';
import Badget from './Badget';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
  <React.StrictMode>
    <Badget />
  </React.StrictMode>
);
