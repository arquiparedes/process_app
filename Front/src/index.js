import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Encabezado from './Cuerpo/Encabezado';
import Cuerpo from './Cuerpo/cuerpo';


ReactDOM.render(
  <Encabezado proceso="REGISTRO DE PROCESO"/>,
document.getElementById('encabezado')
);

ReactDOM.render(
  <React.StrictMode>
    <Cuerpo />
  </React.StrictMode>,
  document.getElementById('cuerpo')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
