import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './layouts/css/all.min.css';
import './layouts/css/bootstrap.min.css';
import './layouts/css/magnific-popup.css';
import './layouts/css/templatemo-dream-pulse.css';
import './layouts/slick/slick.css';
import './layouts/slick/slick-theme.css';
import App from './components/main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
