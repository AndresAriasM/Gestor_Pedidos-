import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Se asume que App.js está en src/
import './index.css';     // Si tienes un archivo de estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
